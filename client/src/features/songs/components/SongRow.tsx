import { Song } from 'features/songs/types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addPlayToSong, setCurrentSong } from 'features/player/playerSlice';
import { RiPlayFill } from 'react-icons/ri';
import { useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';

export const SongRow = (song: Song) => {
  const dispatch = useAppDispatch();
  const currentSongId = useAppSelector(
    (state: RootState) => state?.player?.currentSongInfo?.id,
  );

  const [plays, setPlays] = useState(song.plays);

  // TODO: Optimistic update, but only update server-side if listened to >= 30 seconds
  const onClick = (song: Song) => {
    if (song.id !== currentSongId) {
      dispatch(setCurrentSong(song));
      dispatch(addPlayToSong(song));
      setPlays(plays + 1);
    }
  };

  return (
    <div
      className="rounded-md border-2 flex cursor-pointer"
      onClick={() => onClick(song)}>
      <img
        className="aspect-square w-16 object-cover"
        src={song.coverUrl}
        alt={song.title + ' album art'}
      />
      <div className="ml-4 my-2">
        <p className="">{song.title}</p>
        <p className="text-sm text-slate-400">{song.artist}</p>
        <div className="flex">
          <RiPlayFill className="-ml-1 mr-1" />
          <p className="text-xs text-slate-400">{plays}</p>
        </div>
      </div>
    </div>
  );
};
