import { SongRow } from 'features/songs/components/SongRow';
import { QueueSong } from 'features/player';

type SongListProps = {
  songs: QueueSong[];
  showRemoveQueue?: boolean;
  className?: string;
};

export const SongList = ({
  songs,
  showRemoveQueue = false,
  className = '',
}: SongListProps) => {
  return (
    <div className={`grid grid-cols-1 gap-2 ${className}`}>
      {songs.map((song) => (
        <SongRow song={song} showRemoveQueue={showRemoveQueue} />
      ))}
    </div>
  );
};
