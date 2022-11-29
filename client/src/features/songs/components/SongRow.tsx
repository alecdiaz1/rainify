import { Song } from 'features/songs/types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addToQueue, setCurrentSong } from 'features/player/playerSlice';
import { RiPlayList2Fill } from 'react-icons/ri';
import { SongInfo } from 'features/songs/components/SongInfo';
import { QueueSong } from 'features/player';

type SongRowProps = {
  song: Song | QueueSong;
  hidePlayCount: boolean;
  className?: string;
};

export const SongRow = ({
  song,
  hidePlayCount,
  className = '',
}: SongRowProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`rounded-md flex cursor-pointer overflow-hidden text-white hover:bg-neutral-800
        ${className}`}
      onClick={() => dispatch(setCurrentSong(song))}>
      <SongInfo song={song} hidePlayCount={hidePlayCount} />
      <div
        className="flex items-end justify-end"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="px-2 py-2"
          onClick={() => dispatch(addToQueue(song))}>
          <RiPlayList2Fill />
        </button>
      </div>
    </div>
  );
};
