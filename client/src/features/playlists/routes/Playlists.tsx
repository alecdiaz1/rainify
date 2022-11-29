import { userPlaylistsQuery } from 'features/playlists/api/userPlaylistsQuery';
import { useQuery } from '@tanstack/react-query';
import { Playlist } from 'features/playlists/types';
import { PlaylistRow } from 'features/playlists/components/PlaylistRow';

export const Playlists = () => {
  // TODO: get active user id and put in here
  const { isLoading, data } = useQuery(userPlaylistsQuery('1'));

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {data.playlists.map((playlist: Playlist) => (
        <PlaylistRow key={playlist.id} playlist={playlist} />
      ))}
    </>
  );
};
