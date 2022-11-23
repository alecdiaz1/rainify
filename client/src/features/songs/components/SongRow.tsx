import { Song } from 'features/songs/types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setCurrentSong } from 'features/player/playerSlice';

export const SongRow = (song: Song) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="rounded-md border-2 flex cursor-pointer"
      onClick={() => dispatch(setCurrentSong(song))}>
      <img
        className="aspect-square w-16 object-cover"
        src={song.coverUrl}
        alt={song.title + ' album art'}
      />
      <div className="ml-4 mt-2">
        <p className="">{song.title}</p>
        <p className="text-sm text-slate-400">{song.artist}</p>
        <p className="text-sm text-slate-400">{song.plays}</p>
      </div>
    </div>
  );
};
