import { SongRow } from 'features/songs/components/SongRow';
import { Song } from 'features/songs/types';

type SongListProps = {
  songs: Song[];
  className?: string;
};

export const SongList = ({ songs, className = '' }: SongListProps) => {
  return (
    <div className={`grid grid-cols-1 gap-4 ${className}`}>
      {songs.map((song) => (
        <SongRow key={song.id} song={song} />
      ))}
    </div>
  );
};
