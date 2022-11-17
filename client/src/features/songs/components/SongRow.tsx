import { Song } from 'features/songs/types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setCurrentSong } from 'features/player/playerSlice';
import { formatArtists } from 'utils/formatArtists';

export const SongRow = (song: Song) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="rounded-md border-2 flex cursor-pointer"
      onClick={() => dispatch(setCurrentSong(song.id))}>
      <img
        className="aspect-square w-16 object-cover"
        src={song.coverUrl}
        alt={song.title + ' album art'}
      />
      <div className="ml-4 mt-2">
        <p className="">{song.title}</p>
        <p className="text-sm text-slate-400">{formatArtists(song.artist)}</p>
      </div>
    </div>
  );
};
