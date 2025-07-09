import React, { useState } from "react";

const Details = () => {
  const [showDetails, setShowDetails] = useState(false);

  const arr = [
    {
      name: "Dinesh ",
      role: "Front End",
    },
  ];

  const result = arr.map((e, index) => (
    <div key={index}>
      <h1>{e.name}</h1>
      <p>{e.role}</p>
    </div>
  ));

  return (
    <div>
      {showDetails && result}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Details;
