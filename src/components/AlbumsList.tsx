import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../models/user';
import { Album } from '../models/album';



function AlbumList(): JSX.Element {
    const [albums, setAlbums] = useState<Album[]>([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
          const data = response.data as Album[];
          setAlbums(data);
        })
        .catch(error => console.log(error));
    }, []);
  
    return (
      <div>
        <h1>Album List</h1>
        <ul>
          {albums.map(album => (
            <li key={album.id}>
              <h2>{album.title}</h2>
              <p>User ID: {album.userId}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default AlbumList;