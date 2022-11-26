import { ArtistList } from 'components/ArtistList';
import { RiPlayFill } from 'react-icons/ri';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import { Song } from 'features/songs/types';

type SongInfoProps = {
  song: Song;
  hidePlayCount?: boolean;
};

export const SongInfo = ({ song, hidePlayCount }: SongInfoProps) => {
  const currentSong = useAppSelector(
    (state: RootState) => state.player.queue[0],
  );

  return (
    <>
      <img
        className="aspect-square w-20 object-cover"
        src={song.albumArtUrl}
        alt={song.title + ' album art'}
      />
      <div className="mx-4 my-2 flex justify-between w-full">
        <div className="flex flex-col">
          <p
            className={
              currentSong && currentSong.id === song.id
                ? 'text-green-500'
                : 'text-white'
            }>
            {song.title}
          </p>
          <div className="flex -mt-1" onClick={(e) => e.stopPropagation()}>
            <ArtistList artists={song.artists} />
          </div>
          {!hidePlayCount && (
            <div className="flex mt-2">
              <RiPlayFill className="-ml-1 mr-1" />
              <p className="text-xs text-slate-400">{song.plays}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
