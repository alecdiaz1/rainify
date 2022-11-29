import { Playlist } from 'features/playlists/types';
import { Link } from 'react-router-dom';

type PlaylistRowProps = {
  playlist: Playlist;
  className?: string;
};

export const PlaylistRow = ({ playlist, className = '' }: PlaylistRowProps) => {
  return (
    <Link to={`/playlists/${playlist.id}`}>
      <div
        className={`rounded-md flex cursor-pointer overflow-hidden text-white hover:bg-neutral-800 p-6
        ${className}`}>
        {playlist.title}
      </div>
    </Link>
  );
};
