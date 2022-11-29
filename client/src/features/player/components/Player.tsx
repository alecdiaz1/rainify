import { setSongDetailVisible } from '../playerSlice';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { RootState } from 'stores/store';
import { PlayerControls } from './PlayerControls';
import { PlayerSeeker } from './PlayerSeeker';
import { Link } from 'react-router-dom';
import { ArtistList } from 'components/ArtistList';
import { RiPlayListFill } from 'react-icons/ri';

export const Player = () => {
  const currentSongInfo = useAppSelector(
    (state: RootState) => state.player.queue[0],
  );
  const isPlayerVisible = !!currentSongInfo;
  const dispatch = useAppDispatch();

  return (
    <div
      className={`fixed w-11/12 -translate-x-1/2 left-1/2
       mb-24 transition-all rounded-lg overflow-hidden drop-shadow-lg
        ${isPlayerVisible ? 'bottom-0' : '-bottom-full'}`}>
      <div className="relative bg-neutral-700 w-full h-24 bg-neutral-800 flex items-center rounded-lg">
        <div className="px-4 w-full flex items-center justify-between">
          <div className="flex">
            <img
              className="aspect-square w-16 object-cover mr-4"
              src={currentSongInfo?.albumArtUrl}
              alt={currentSongInfo?.title + ' album art'}
            />
            <div>
              <div className="-mt-1">
                <p
                  className="text-lg cursor-pointer text-white"
                  onClick={() => dispatch(setSongDetailVisible(true))}>
                  {currentSongInfo?.title}
                </p>
                <ArtistList
                  className="text-base -mt-8"
                  artists={currentSongInfo ? currentSongInfo.artists : []}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/queue">
              <RiPlayListFill size={24} className="mr-4 fill-gray-400" />
            </Link>
            <PlayerControls />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <PlayerSeeker hideThumb />
      </div>
    </div>
  );
};
