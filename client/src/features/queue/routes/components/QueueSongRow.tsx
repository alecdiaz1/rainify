import { useAppDispatch } from 'hooks/useAppDispatch';
import { removeFromQueue } from 'features/player/playerSlice';
import { RiCloseFill } from 'react-icons/ri';
import { SongInfo } from 'features/songs/components/SongInfo';
import { QueueSong } from 'features/player';
import { useUpdatePlayCount } from 'hooks/useUpdatePlayCount';

type QueueSongRowProps = {
  song: QueueSong;
  className?: string;
};

export const QueueSongRow = ({ song, className = '' }: QueueSongRowProps) => {
  const dispatch = useAppDispatch();
  const { plays, onSongClick } = useUpdatePlayCount(song);

  return (
    <div
      className={`rounded-md flex cursor-pointer overflow-hidden text-white hover:bg-neutral-800
        ${className}`}
      onClick={() => onSongClick(song)}>
      <SongInfo hidePlayCount song={{ ...song, plays: plays }} />
      <div
        className="flex items-center justify-end"
        onClick={(e) => e.stopPropagation()}>
        <button onClick={() => dispatch(removeFromQueue(song))}>
          <RiCloseFill size={24} />
        </button>
      </div>
    </div>
  );
};
