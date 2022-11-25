import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import { PlayerControls } from 'features/player/components/PlayerControls';
import { PlayerSeeker } from 'features/player/components/PlayerSeeker';
import { ArtistList } from 'components/ArtistList';
import { Link } from 'react-router-dom';
import { RiPlayListFill } from 'react-icons/ri';
import { setSongDetailVisible } from 'features/player/playerSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';

export const SongDetail = () => {
  const isVisible = useAppSelector(
    (state: RootState) => state.player.isSongDetailVisible,
  );
  const currentSongInfo = useAppSelector(
    (state: RootState) => state.player.queue[0],
  );
  const dispatch = useAppDispatch();

  return (
    <div
      className={`fixed w-full h-full bg-white transition-all z-10 ${
        isVisible ? 'top-16' : 'top-full'
      }`}>
      <div className="flex flex-col mx-4">
        <img
          className="aspect-square object-cover rounded-lg"
          src={currentSongInfo?.albumArtUrl}
          alt={`${currentSongInfo?.title} album art`}
        />
        <h1 className="font-bold mt-8">{currentSongInfo?.title}</h1>
        <h2>
          <ArtistList
            className="text-base"
            artists={currentSongInfo ? currentSongInfo.artists : []}
          />
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center mx-4">
        <div className="grid grid-cols-3">
          <PlayerControls className="mt-2 w-40 col-start-2 col-end-2" />
          <div className="flex justify-end items-center">
            <Link
              to="/queue"
              onClick={() => dispatch(setSongDetailVisible(false))}>
              <RiPlayListFill size={24} />
            </Link>
          </div>
        </div>
        <PlayerSeeker hideThumb={false} className="mt-2 w-full" />
      </div>
    </div>
  );
};
