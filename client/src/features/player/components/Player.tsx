import { setSongDetailVisible } from '../playerSlice';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { RootState } from 'stores/store';
import { SONGS } from 'songs';
import { formatArtists } from 'utils/formatArtists';
import { PlayerControls } from 'components/PlayerControls';

export const Player = () => {
  const currentSongId = useAppSelector(
    (state: RootState) => state.player.queue[0],
  );
  const currentSongInfo = SONGS.find((song) => song.id === currentSongId);
  const isPlayerVisible = currentSongInfo !== undefined;
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
              src={currentSongInfo?.coverUrl}
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
                  {formatArtists(currentSongInfo?.artist)}
                </p>
              </div>
            </div>
          </div>
          <div>
            <PlayerControls />
          </div>
        </div>
        <div className="absolute bottom-0 bg-gray-600 h-2 w-full"></div>
      </div>
    </div>
  );
};
