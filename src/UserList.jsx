import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => setUsers(data));
  //   }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>List</h1>
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {users
          .filter(
            (user) =>
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.username.toLowerCase().includes(search.toLowerCase())
          )

          .map((user, index) => (
            <li key={index}>
              {user.name} - {user.email} - {user.username}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
