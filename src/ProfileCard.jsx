import React from "react";

const ProfileCard = ({ name, role }) => {
  return (
    <>
      <div>
        <h3>Hello, {name} 👋</h3>
        <h4>{role}</h4>
      </div>
    </>
  );
};
export default ProfileCard;
