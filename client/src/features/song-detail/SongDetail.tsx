import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import { SONGS } from 'songs';
import { formatArtists } from 'utils/formatArtists';
import { PlayerControls } from 'features/player/components/PlayerControls';
import { PlayerSeeker } from 'features/player/components/PlayerSeeker';

export const SongDetail = () => {
  const isVisible = useAppSelector(
    (state: RootState) => state.player.isSongDetailVisible,
  );
  const currentSongId = useAppSelector(
    (state: RootState) => state.player.queue[0],
  );
  const currentSongInfo = SONGS.find((song) => song.id === currentSongId);

  return (
    <div
      className={`fixed w-full h-full bg-white transition-all z-10 ${
        isVisible ? 'top-16' : 'top-full'
      }`}>
      <div className="flex flex-col mx-4">
        <img
          className="aspect-square object-cover"
          src={currentSongInfo?.coverUrl}
          alt={`${currentSongInfo?.title} album art`}
        />
        <h1 className="font-bold mt-8">{currentSongInfo?.title}</h1>
        <h2>{formatArtists(currentSongInfo?.artist)}</h2>
      </div>
      <div className="flex flex-col justify-center items-center mx-4">
        <PlayerControls className="mt-2" />
        <PlayerSeeker hideThumb={false} className="mt-2 w-full" />
      </div>
    </div>
  );
};
