import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import { useState } from 'react';
import { Song } from 'features/songs';
import { setCurrentSong } from 'features/player/playerSlice';
import { QueueSong } from 'features/player';

export const useUpdatePlayCount = (song: Song | QueueSong) => {
  const dispatch = useAppDispatch();
  const currentSongId = useAppSelector(
    (state: RootState) => state.player.queue[0]?.id,
  );

  const [plays, setPlays] = useState(song.plays);

  const onSongClick = (song: Song) => {
    if (song.id !== currentSongId) {
      dispatch(setCurrentSong(song));
      // Optimistic update, actual update happens in AudioProvider
      setPlays(Number(plays) + 1);
    }
  };

  return { plays, setPlays, onSongClick };
};
