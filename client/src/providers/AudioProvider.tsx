import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import { SONGS } from 'songs';
import { useEffect, useRef } from 'react';

export const AudioProvider = () => {
  const isPlaying = useAppSelector((state: RootState) => state.player.playing);
  const currentSongId = useAppSelector(
    (state: RootState) => state.player.queue[0],
  );
  const currentSongInfo = SONGS.find((song) => song.id === currentSongId);
  const audioRef = useRef(new Audio(currentSongInfo?.fileUrl));

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(currentSongInfo?.fileUrl);
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
