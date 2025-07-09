import React from "react";
import ProfileCard from "./ProfileCard";

const Names = () => {
  const arr = [
    { name: "Dinesh", role: "Back" },
    { name: "Ram", role: "front" },
  ];

  return (
    <>
      {arr.map((person, index) => (
        <ProfileCard key={index} name={person.name} role={person.role} />
      ))}
    </>
  );
};

export default Names;
