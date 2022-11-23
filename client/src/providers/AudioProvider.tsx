import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import React, { createContext, useContext, useEffect, useRef } from 'react';

export const AudioContext = createContext<{
  audioRef: React.RefObject<any> | null;
}>({
  audioRef: null,
});

export const AudioProvider = () => {
  const isPlaying = useAppSelector((state: RootState) => state.player.playing);
  const volume = useAppSelector((state: RootState) => state.player.volume);
  const currentSongInfo = useAppSelector(
    (state: RootState) => state.player.currentSongInfo,
  );
  const audioRef = useRef(new Audio(currentSongInfo?.fileUrl));
  const audioContext = useContext(AudioContext);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(currentSongInfo?.fileUrl);
    audioContext.audioRef = audioRef;
    audioRef.current.volume = volume;
    audioRef.current.play().then();
  }, [currentSongInfo]);

  useEffect(() => {
    if (!isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().then();
    }
  }, [isPlaying]);

  return <></>;
};
