import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <p>© {year} All Rights Reserved</p>
    </>
  );
};

export default Footer;
