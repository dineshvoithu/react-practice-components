import React, { useContext } from "react";
import UserContext from "./UserContext";

const ProfileCard = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div>
        <h3>Hello, {user.name} 👋</h3>
        <h4>{user.role}</h4>
      </div>
    </>
  );
};
export default ProfileCard;
