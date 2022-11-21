import { useContext } from 'react';
import { AudioContext } from 'providers/AudioProvider';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import { setVolume } from 'features/player/playerSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';

export const VolumeSlider = ({ className }: { className?: string }) => {
  const { audioRef } = useContext(AudioContext);
  const volume = useAppSelector((state: RootState) => state.player.volume);
  const dispatch = useAppDispatch();

  const onScrub = (value: number) => {
    dispatch(setVolume(value));
    if (audioRef) {
      audioRef.current.volume = value;
    }
  };

  return (
    <input
      className={`cursor-pointer w-full ${className || ''}`}
      type="range"
      step=".05"
      min="0"
      max="1"
      value={volume}
      onChange={(e) => onScrub(Number(e.target.value))}
    />
  );
};
