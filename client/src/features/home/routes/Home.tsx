import { SongList } from 'features/songs/components/SongList';
import { useEffect, useState } from 'react';
import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';

export const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const client = applyCaseMiddleware(axios.create());
    client.get(`${process.env.REACT_APP_API_URL}/songs`).then((res) => {
      setSongs(res.data.songs);
    });
  }, []);

  return (
    <>
      <SongList songs={songs} />
    </>
  );
};
