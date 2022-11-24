import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';
import { SongList } from 'features/songs/components/SongList';

export const Profile = () => {
  let { id } = useParams();

  const [songs, setSongs] = useState([]);
  const [artistName, setArtistName] = useState('');

  useEffect(() => {
    const client = applyCaseMiddleware(axios.create());
    client.get(`${process.env.REACT_APP_API_URL}/users/${id}`).then((res) => {
      setSongs(res.data.songs);
      setArtistName(res.data.artistName);
    });
  }, []);

  return (
    <>
      <h2 className="text-xl mb-4">Songs by {artistName}</h2>
      <SongList songs={songs} />
    </>
  );
};
