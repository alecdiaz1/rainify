import { useContext, useEffect, useState } from 'react';
import { AudioContext } from 'providers/AudioProvider';
import 'features/player/components/PlayerSeeker.css';

export const PlayerSeeker = ({
  className,
  hideThumb,
}: {
  className?: string;
  hideThumb: boolean;
}) => {
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

  if (hideThumb) {
    return (
      <div className={className}>
        <input
          className="seeker seeker-bg absolute bottom-0 h-2 bg-gray-500 w-full"
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
        />
        <input
          className="seeker absolute bottom-0 bg-black h-2 cursor-pointer"
          style={{
            width: (trackProgress / duration) * 100 + '%',
            pointerEvents: 'none',
          }}
          type="range"
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
        />
      </div>
    );
  } else {
    return (
      <input
        className="bg-black cursor-pointer w-full mt-4"
        type="range"
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        onChange={(e) => onScrub(e.target.value)}
        value={trackProgress}
      />
    );
  }
};
