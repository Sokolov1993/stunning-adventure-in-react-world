import React, { useState, useEffect } from 'react';

const Users = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers] = useState([]);
  const [renderUser, setRenderUser] = useState([]);
  const [input, setInput] = useState('');

  const fetchUsers = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(fetchUsers, []);

  const onChangeHandler = (event) => {
    setInput(event.target.value);

    const newUsers = users.filter((user) =>
      user.username.toLowerCase().includes(input.toLowerCase())
    );

    setRenderUser(newUsers);
  };

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={input} />
      <div>
        {input &&
          renderUser.map((user) => {
            return <div key={user.id}>{user.username}</div>;
          })}
      </div>
    </div>
  );
};

export default Users;
