import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Album } from '../models/album';

interface UserAlbumsProps {
  userId: number;
}

function UserAlbums(props: UserAlbumsProps): JSX.Element {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${props.userId}`)
      .then(response => {
        const data = response.data as Album[];
        setAlbums(data);
      })
      .catch(error => console.log(error));
  }, [props.userId]);

  return (
    <div>
      <h2>Albums for User {props.userId}</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <h3>{album.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface UserSelectProps {
  users: any[];
  onSelect: (userId: number) => void;
}

function UserSelect(props: UserSelectProps): JSX.Element {
  const [selectedUserId, setSelectedUserId] = useState(0);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(event.target.value);
    setSelectedUserId(selectedValue);
    props.onSelect(selectedValue);
  }

  return (
    <div>
      <label htmlFor="user-select">Select User:</label>
      <select id="user-select" value={selectedUserId} onChange={handleSelectChange}>
        <option value={0}>Select User</option>
        {props.users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
}

function UserAlbumsContainer(): JSX.Element {
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const data = response.data;
        setUsers(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleUserSelect = (userId: number) => {
    setSelectedUserId(userId);
  }

  return (
    <div>
      <h1>User Albums</h1>
      <UserSelect users={users} onSelect={handleUserSelect} />
      {selectedUserId !== 0 && (
        <UserAlbums userId={selectedUserId} />
      )}
    </div>
  );
}

export default UserAlbumsContainer;
