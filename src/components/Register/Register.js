import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext, UserContextProvider } from "../UserContext/UserContext";
import Profile from "../Profile/Profile";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register");
  const {
    email: loggedEmail,
    setId,
    setEmail: setLoginUser,
  } = useContext(UserContext);
  if (loggedEmail) {
    return <Profile></Profile>;
  }
  const handleLoginOrRegister = async (event) => {
    event.preventDefault();
    await axios
      .post(
        isLoginOrRegister === "register" ? "/register" : "/login",
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
    <div className="h-screen  bg-blue-100">
      <div className="flex justify-center items-center">
        <form onSubmit={handleLoginOrRegister}>
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
          {isLoginOrRegister === "register" ? (
            <button className="bg-blue-400 p-4 w-72">Register</button>
          ) : (
            <button className="bg-blue-400 p-4 w-72">Login</button>
          )}
        </form>
      </div>
      <div className="text-center">
        {isLoginOrRegister === "login" ? (
          <p>
            Not a member?
            <button onClick={() => setIsLoginOrRegister("register")}>
              Register Here
            </button>{" "}
          </p>
        ) : (
          <p>
            Already a member?
            <button onClick={() => setIsLoginOrRegister("login")}>
              Login Here
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
