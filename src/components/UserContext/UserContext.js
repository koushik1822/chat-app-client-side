import axios from "axios";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

/* eslint-disable react-hooks/rules-of-hooks */
const { useContext, createContext, useState, useEffect } = require("react");

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [id, setId] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get("/profile")
        .then((res) => {
          console.log(res);
          setEmail(res.data.email);
          setId(res.data.userId);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ id, setEmail, setId, email }}>
      {children}
    </UserContext.Provider>
  );
}
