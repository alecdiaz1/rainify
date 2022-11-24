import { setSongDetailVisible } from '../playerSlice';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { RootState } from 'stores/store';
import { PlayerControls } from './PlayerControls';
import { PlayerSeeker } from './PlayerSeeker';
import { formatArtists } from 'utils/formatArtists';

export const Player = () => {
  const currentSongInfo = useAppSelector(
    (state: RootState) => state.player.queue[0],
  );
  const isPlayerVisible = !!currentSongInfo;
  const dispatch = useAppDispatch();

  return (
    <div
      className={`fixed w-full transition-all ${
        isPlayerVisible ? 'bottom-0' : '-bottom-full'
      }`}>
      <div className="relative w-full h-32 bg-gray-200 flex items-center">
        <div className="px-4 w-full flex items-center justify-between">
          <div className="flex">
            <img
              className="aspect-square w-20 object-cover mr-4"
              src={currentSongInfo?.albumArtUrl}
              alt={currentSongInfo?.title + ' album art'}
            />
            <div>
              <div className="-mt-1">
                <p
                  className="text-lg cursor-pointer"
                  onClick={() => dispatch(setSongDetailVisible())}>
                  {currentSongInfo?.title}
                </p>
                <p className="text-slate-400">
                  {formatArtists(currentSongInfo?.artists)}
                </p>
              </div>
            </div>
          </div>
          <div>
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
