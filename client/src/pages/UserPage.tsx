import { useEffect, useState } from "react";
import axios from "axios";
import { UseAuthStore } from "../store/ZustandStore";
import UserCard from "../component/UserCard";
import type { User } from "../component/UserCard";

const UserPage = () => {
  const token = UseAuthStore((state) => state.token);
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get("http://localhost:3000/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(user);
      setData(user.data);
      console.log(data);
    };
    getUser();
  }, []);

  return <div>{data && <UserCard user={data} />}</div>;
};

export default UserPage;
