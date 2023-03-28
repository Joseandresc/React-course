import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../models/user';

function UserList(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response: { data: User[]; }) => {
        const data = response.data as User[];
        const users = data.map(user => {
          return new User(
            user.id,
            user.name,
            user.username,
            user.email,
            user.address,
            user.phone,
            user.website,
            user.company
          );
        });
        setUsers(users);
      })
      .catch((error: any) => console.log(error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
