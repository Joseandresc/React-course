# UserAlbums Component

The `UserAlbums` component is responsible for fetching and rendering the albums of a particular user. Let's take a look at the code in detail:

```typescript
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Album } from '../models/Album';

interface UserAlbumsProps {
  userId: number;
}

const UserAlbums = ({ userId }: UserAlbumsProps) => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await axios.get<Album[]>(
        `https://jsonplaceholder.typicode.com/users/${userId}/albums`
      );
      setAlbums(response.data);
    };

    fetchAlbums();
  }, [userId]);

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
```

*Props*

The UserAlbums component accepts a single prop, userId, which is a number representing the ID of the user whose albums should be fetched and rendered.
```typescript

interface UserAlbumsProps {
  userId: number;
}
```

State
The component initializes the albums state variable using the useState hook, with an empty array of Album objects:

const [albums, setAlbums] = useState<Album[]>([]);


useEffect
The useEffect hook is used to fetch the user's albums from the API whenever the userId prop changes. The function inside the hook is an async function that sends an HTTP GET request to the JSONPlaceholder API to retrieve the albums for the selected user. The response from the API is stored in the response variable, and the setAlbums function is used to update the albums state variable with the data from the API response:

```typescript
useEffect(() => {
  const fetchAlbums = async () => {
    const response = await axios.get<Album[]>(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums`
    );
    setAlbums(response.data);
  };

  fetchAlbums();
}, [userId]);

```

Rendering

The component returns a div element containing an h2 element with the text "Albums", and a ul element that displays the user's albums as a list of li elements. The map function is used to iterate through the albums array and render an li element for each album. The key prop is set to the id property of the album, to help React efficiently update the list when changes occur. The title of the album is displayed using the title property of the album object:

```typescript

return (
  <div>
    <h2>Albums</h2>
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title}
        </li>
      ))}
    </ul>
  </div>
);
```