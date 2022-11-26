import { QueueSong } from 'features/player';
import { QueueSongRow } from 'features/queue/routes/components/QueueSongRow';

type SongListProps = {
  songs: QueueSong[];
  className?: string;
};

export const QueueSongList = ({ songs, className = '' }: SongListProps) => {
  return (
    <div className={`grid grid-cols-1 gap-4 ${className}`}>
      {songs.map((song) => (
        <QueueSongRow key={song.id} song={song} />
      ))}
    </div>
  );
};
