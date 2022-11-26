import { Song } from 'features/songs/types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addToQueue } from 'features/player/playerSlice';
import { RiPlayList2Fill } from 'react-icons/ri';
import { SongInfo } from 'features/songs/components/SongInfo';
import { QueueSong } from 'features/player';
import { useUpdatePlayCount } from 'hooks/useUpdatePlayCount';

type SongRowProps = {
  song: Song | QueueSong;
  className?: string;
};

export const SongRow = ({ song, className = '' }: SongRowProps) => {
  const dispatch = useAppDispatch();
  const { plays, onSongClick } = useUpdatePlayCount(song);

  return (
    <div
      className={`rounded-md flex cursor-pointer overflow-hidden text-white hover:bg-neutral-800
        ${className}`}
      onClick={() => onSongClick(song)}>
      <SongInfo song={{ ...song, plays: plays }} />
      <div
        className="flex items-end justify-end"
        onClick={(e) => e.stopPropagation()}>
        <button onClick={() => dispatch(addToQueue(song))}>
          <RiPlayList2Fill />
        </button>
      </div>
    </div>
  );
};
