import { useAppDispatch } from 'hooks/useAppDispatch';
import {
  removeFromQueue,
  setCurrentSongFromQueue,
} from 'features/player/playerSlice';
import { RiCloseFill } from 'react-icons/ri';
import { SongInfo } from 'features/songs/components/SongInfo';
import { QueueSong } from 'features/player';

type QueueSongRowProps = {
  song: QueueSong;
  className?: string;
};

export const QueueSongRow = ({ song, className = '' }: QueueSongRowProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`rounded-md flex cursor-pointer overflow-hidden text-white hover:bg-neutral-800
        ${className}`}
      onClick={() => {
        dispatch(setCurrentSongFromQueue(song.queueId));
      }}>
      <SongInfo hidePlayCount song={song} />
      <div
        className="flex items-center justify-end"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="pr-2"
          onClick={() => dispatch(removeFromQueue(song))}>
          <RiCloseFill size={24} />
        </button>
      </div>
    </div>
  );
};
