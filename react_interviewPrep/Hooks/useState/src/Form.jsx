import { useState } from "react";

export const Form = () => {
  const [useData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...useData, [name]: value });

  };
  return (
    <>  
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(useData)
      }}>
        <input
          placeholder="first name"
          type="text"
          onChange={handleChange}
          name="firstname"
        />
        <input
          placeholder="last name"
          type="text"
          onChange={handleChange}
          name="lastname"
        />
        <input
          placeholder="email"
          type="text"
          onChange={handleChange}
          name="email"
        />
        <button>Submit</button>
      </form>
    </>
  );
};
