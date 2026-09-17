import { UseAuthStore } from "../store/ZustandStore";

interface UserPops {
  user: User;
}
export type User = {
  _id: string;
  name: string;
  email: string;
};

const UserCard = ({ user }: UserPops) => {
  const logout = UseAuthStore((state) => state.logout);
  return (
    <div className="userCard" id={user._id}>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default UserCard;
