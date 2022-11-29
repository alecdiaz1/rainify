import { useParams } from 'react-router-dom';
import { playlistQuery } from 'features/playlists/api/playlistQuery';
import { useQuery } from '@tanstack/react-query';
import { SongList } from 'features/songs/components/SongList';

export const Playlist = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(playlistQuery(id));

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <SongList songs={data.playlistSongs} hidePlayCount />
    </>
  );
};
