import { SongList } from 'features/songs/components/SongList';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3333/songs')
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.songs);
      });
  }, []);

  return (
    <>
      <SongList songs={songs} />
    </>
  );
};
