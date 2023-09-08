import React, { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";

const Profile = () => {
  const { id, email } = useContext(UserContext);
  console.log(id, email);
  return <div>Logged in</div>;
};

export default Profile;
