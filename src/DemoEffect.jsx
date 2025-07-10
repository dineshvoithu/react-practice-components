import React, { useEffect } from "react";

const DemoEffect = () => {
  useEffect(() => {
    console.log("Screen is now visible to the user!");
  }, []);

  return <h2>Check the console 🔍</h2>;
};

export default DemoEffect;
