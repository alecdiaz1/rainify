import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { gotoNextSong, play } from 'features/player/playerSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';

export const AudioContext = createContext<{
  audioRef: React.RefObject<any> | null;
}>({
  audioRef: null,
});

const COUNT_PLAY_SECONDS_THRESHOLD = 30;

export const AudioProvider = () => {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state: RootState) => state.player.playing);
  const volume = useAppSelector((state: RootState) => state.player.volume);
  const currentSongInfo = useAppSelector(
    (state: RootState) => state.player.queue[0],
  );
  const audioRef = useRef(new Audio(currentSongInfo?.songUrl));
  const audioContext = useContext(AudioContext);

  const [seconds, setSeconds] = useState(COUNT_PLAY_SECONDS_THRESHOLD);
  const [currentSongCounted, setCurrentSongCounted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (currentSongInfo && !currentSongCounted) {
            fetch(
              `${process.env.REACT_APP_API_URL}/songs/${currentSongInfo.id}/add-play`,
            ).then();
            setCurrentSongCounted(true);
            clearInterval(interval);
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(currentSongInfo?.songUrl);
    audioContext.audioRef = audioRef;
    audioRef.current.volume = volume;
    audioRef.current.play().then();
    dispatch(play());
    setSeconds(COUNT_PLAY_SECONDS_THRESHOLD);
    setCurrentSongCounted(false);
  }, [currentSongInfo]);

  useEffect(() => {
    audioRef.current.addEventListener('ended', () => {
      dispatch(gotoNextSong());
    });
  }, [currentSongInfo]);

  useEffect(() => {
    if (!isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().then();
    }
  }, [isPlaying]);

  return null;
};
