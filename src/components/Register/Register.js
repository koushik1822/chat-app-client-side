import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext, UserContextProvider } from "../UserContext/UserContext";
import Profile from "../Profile/Profile";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    email: loggedEmail,
    setId,
    setEmail: setLoginUser,
  } = useContext(UserContext);
  if (loggedEmail) {
    return <Profile></Profile>;
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    await axios
      .post(
        "/register",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        setId(res.data.id);
        setLoginUser(res.data.email);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center bg-blue-100">
      <form onSubmit={handleRegister}>
        <input
          type="email"
          className="border block mb-2 w-72 p-2"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          className="border block mb-2 w-72 p-2"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="bg-blue-400 p-4 w-72">Submit</button>
      </form>
    </div>
  );
};

export default Register;
