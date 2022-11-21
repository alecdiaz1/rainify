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
  const isPlaying = useAppSelector((state: RootState) => state.player.playing);
  const dispatch = useAppDispatch();

  return (
    <div className={`flex items-center justify-between ${className || ''}`}>
      <RiSkipBackFill
        size={32}
        style={{ cursor: 'pointer' }}
        onClick={() => dispatch(gotoPreviousSong())}
      />
      <div className="mx-4">
        {isPlaying ? (
          <RiPauseCircleFill
            size={48}
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(pause())}
          />
        ) : (
          <RiPlayCircleFill
            size={48}
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(play())}
          />
        )}
      </div>
      <RiSkipForwardFill
        size={32}
        style={{ cursor: 'pointer' }}
        onClick={() => dispatch(gotoNextSong())}
      />
    </div>
  );
};
