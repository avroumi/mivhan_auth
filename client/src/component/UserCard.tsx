interface UserPops {
  user: User;
}
export type User = {
  _id: string;
  name: string;
  email: string;
};

const UserCard = ({ user }: UserPops) => {
  return (
    <div className="userCard" id={user._id}>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;
