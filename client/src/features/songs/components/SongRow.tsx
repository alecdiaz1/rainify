import { Song } from 'features/songs/types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import {
  addToQueue,
  removeFromQueue,
  setCurrentSong,
} from 'features/player/playerSlice';
import { RiCloseFill, RiPlayFill, RiPlayList2Fill } from 'react-icons/ri';
import { useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import { ArtistList } from 'components/ArtistList';
import { QueueSong } from 'features/player';

type SongRowProps = {
  song: QueueSong;
  showRemoveQueue?: boolean;
  className?: string;
};

export const SongRow = ({
  song,
  showRemoveQueue,
  className = '',
}: SongRowProps) => {
  const dispatch = useAppDispatch();
  const currentSongId = useAppSelector(
    (state: RootState) => state.player.queue[0]?.id,
  );

  const [plays, setPlays] = useState(song.plays);

  const onSongClick = (song: Song) => {
    if (song.id !== currentSongId) {
      dispatch(setCurrentSong(song));
      // Optimistic update, actual update happens in AudioProvider
      setPlays(Number(plays) + 1);
    }
  };

  const renderRemoveFromQueue = () => (
    <div
      className="flex items-center justify-end"
      onClick={(e) => e.stopPropagation()}>
      <button onClick={() => dispatch(removeFromQueue(song))}>
        <RiCloseFill size={24} />
      </button>
    </div>
  );

  const renderAddToQueue = () => (
    <div
      className="flex items-end justify-end"
      onClick={(e) => e.stopPropagation()}>
      <button onClick={() => dispatch(addToQueue(song))}>
        <RiPlayList2Fill />
      </button>
    </div>
  );

  return (
    <div
      className={`rounded-md border-2 flex cursor-pointer overflow-hidden 
        ${className} 
        ${!showRemoveQueue && currentSongId === song.id ? 'bg-gray-50' : ''}`}
      onClick={() => onSongClick(song)}>
      <img
        className="aspect-square w-20 object-cover"
        src={song.albumArtUrl}
        alt={song.title + ' album art'}
      />
      <div className="mx-4 my-2 flex justify-between w-full">
        <div className="flex flex-col">
          <p className="">{song.title}</p>
          <div className="flex -mt-1" onClick={(e) => e.stopPropagation()}>
            <ArtistList artists={song.artists} />
          </div>
          <div className="flex mt-2">
            <RiPlayFill className="-ml-1 mr-1" />
            <p className="text-xs text-slate-400">{plays}</p>
          </div>
        </div>
        {showRemoveQueue ? renderRemoveFromQueue() : renderAddToQueue()}
      </div>
    </div>
  );
};
