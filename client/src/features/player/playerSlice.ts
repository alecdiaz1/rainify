import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RefObject } from 'react';
import { Song } from 'features/songs';

interface PlayerState {
  playing: boolean;
  queue: Song[];
  history: Song[];
  isSongDetailVisible: boolean;
  currentSongRef: RefObject<HTMLAudioElement> | null;
  volume: number;
}

const initialState: PlayerState = {
  playing: false,
  queue: [],
  history: [],
  isSongDetailVisible: false,
  currentSongRef: null,
  volume: 0.5,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state) => {
      state.playing = true;
    },
    pause: (state) => {
      state.playing = false;
    },
    setCurrentSong: (state, action: PayloadAction<Song>) => {
      if (state.queue.length > 0) {
        const newPrevSong = state.queue[0];
        const prevSong = state.history[state.history.length - 1];
        if (!prevSong || !(newPrevSong === prevSong)) {
          state.history.push(newPrevSong);
        }
      }
      state.queue[0] = action.payload;
      state.playing = true;
    },
    gotoPreviousSong: (state) => {
      const newCurrentSong = state.history.pop();
      if (newCurrentSong) {
        state.queue.unshift(newCurrentSong);
      }
      state.playing = true;
    },
    gotoNextSong: (state) => {
      if (state.queue.length > 1) {
        const newPrevSong = state.queue.shift();
        if (newPrevSong) {
          state.history.push(newPrevSong);
        }
      }
      state.playing = true;
    },
    addToQueue: (state, action: PayloadAction<Song>) => {
      state.queue.push(action.payload);
    },
    removeFromQueue: (state, action: PayloadAction<Song>) => {
      state.queue = state.queue.filter((song) => song !== action.payload);
    },
    setSongDetailVisible: (state, action: PayloadAction<boolean>) => {
      state.isSongDetailVisible = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const {
  play,
  pause,
  setCurrentSong,
  gotoPreviousSong,
  gotoNextSong,
  addToQueue,
  removeFromQueue,
  setSongDetailVisible,
  setVolume,
} = playerSlice.actions;

export default playerSlice.reducer;
