import { SongList } from 'features/songs/components/SongList';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/songs`)
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
