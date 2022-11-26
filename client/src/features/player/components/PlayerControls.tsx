import {
  RiPauseCircleFill,
  RiPlayCircleFill,
  RiSkipBackFill,
  RiSkipForwardFill,
} from 'react-icons/ri';
import {
  gotoNextSong,
  gotoPreviousSong,
  pause,
  play,
} from 'features/player/playerSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';

export const PlayerControls = ({ className }: { className?: string }) => {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state: RootState) => state.player.playing);
  const queue = useAppSelector((state: RootState) => state.player.queue);
  const history = useAppSelector((state: RootState) => state.player.history);

  const isSkipForwardDisabled = queue.length <= 1;
  const isSkipBackDisabled = history.length < 1;

  return (
    <div className={`flex items-center justify-between ${className || ''}`}>
      <button disabled={isSkipBackDisabled}>
        <RiSkipBackFill
          size={32}
          onClick={() => dispatch(gotoPreviousSong())}
          className={isSkipBackDisabled ? 'fill-gray-500' : 'fill-gray-300'}
        />
      </button>
      <div className="mx-4">
        {isPlaying ? (
          <RiPauseCircleFill
            size={48}
            className={'fill-gray-300'}
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(pause())}
          />
        ) : (
          <RiPlayCircleFill
            size={48}
            className={'fill-gray-300'}
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(play())}
          />
        )}
      </div>
      <button disabled={isSkipForwardDisabled}>
        <RiSkipForwardFill
          size={32}
          onClick={() => dispatch(gotoNextSong())}
          className={isSkipForwardDisabled ? 'fill-gray-500' : 'fill-gray-300'}
        />
      </button>
    </div>
  );
};
