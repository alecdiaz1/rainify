import {
  RiPlayCircleFill,
  RiPauseCircleFill,
  RiSkipBackFill,
  RiSkipForwardFill,
} from 'react-icons/ri';
import { play, pause } from '../playerSlice';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { RootState } from 'stores/store';
import { SONGS } from 'songs';
import { formatArtists } from 'utils/formatArtists';

export const Player = () => {
  const isPlaying = useAppSelector((state: RootState) => state.player.playing);
  const currentSongId = useAppSelector(
    (state: RootState) => state.player.queue[0],
  );
  const currentSongInfo = SONGS.find((song) => song.id === currentSongId);

  const dispatch = useAppDispatch();

  const onPlayPressed = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  return (
    <div>
      <div className="fixed bottom-0 w-full h-32 bg-gray-200 flex items-center justify-between px-4">
        <div className="flex">
          <img
            className="aspect-square w-20 object-cover mr-4"
            src={currentSongInfo?.coverUrl}
            alt={currentSongInfo?.title + ' album art'}
          />
          <div className="-mt-1">
            <p className="text-lg">{currentSongInfo?.title}</p>
            <p className="text-slate-400">
              {formatArtists(currentSongInfo?.artist)}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <RiSkipBackFill size={32} style={{ cursor: 'pointer' }} />
          <div className="mx-4">
            {isPlaying ? (
              <RiPauseCircleFill
                size={48}
                style={{ cursor: 'pointer' }}
                onClick={() => onPlayPressed()}
              />
            ) : (
              <RiPlayCircleFill
                size={48}
                style={{ cursor: 'pointer' }}
                onClick={() => onPlayPressed()}
              />
            )}
          </div>
          <RiSkipForwardFill size={32} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div className="fixed bottom-0 bg-gray-600 h-2 w-full"></div>
    </div>
  );
};
