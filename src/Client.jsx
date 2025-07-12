import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Client = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>👥 User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Link to dynamic route using user.id */}
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Client;
