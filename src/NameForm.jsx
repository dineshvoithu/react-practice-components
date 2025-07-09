import React, { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const handleOnSubmit = () => {
    console.log(`name: ${name}`);
    console.log(`mail: ${mail}`);

    setName("");
    setMail("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />

      <button onClick={handleOnSubmit}>Submit</button>
    </div>
  );
};

export default NameForm;
