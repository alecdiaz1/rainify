import { useContext, useEffect, useState } from 'react';
import { AudioContext } from 'providers/AudioProvider';

export const PlayerSeeker = ({ className }: { className?: string }) => {
  const { audioRef } = useContext(AudioContext);
  const [trackProgress, setTrackProgress] = useState(0);
  const { duration } = audioRef?.current || {};

  const startTimer = () => {
    setInterval(() => {
      if (audioRef) {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  const onScrub = (value: string) => {
    if (audioRef) {
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    startTimer();
  }, [audioRef]);

  return (
    <div className={className}>
      <input
        className="bg-gray-600 h-2 w-full cursor-pointer"
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        onChange={(e) => onScrub(e.target.value)}
      />
    </div>
  );
};
