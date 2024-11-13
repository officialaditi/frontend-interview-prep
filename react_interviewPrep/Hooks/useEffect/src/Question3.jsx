import { useEffect, useState } from "react";

export const Question3 = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
   setUsers(data.users)
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <span key={user.id}>{user.firstName}</span>
      ))}
    </div>
  );
};
