import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RefObject } from 'react';
import { Song } from 'features/songs';

interface PlayerState {
  playing: boolean;
  queue: number[];
  history: number[];
  isSongDetailVisible: boolean;
  currentSongRef: RefObject<HTMLAudioElement> | null;
  currentSongInfo: Song | null;
  volume: number;
}

const initialState: PlayerState = {
  playing: false,
  queue: [],
  history: [],
  isSongDetailVisible: false,
  currentSongRef: null,
  volume: 0.5,
  currentSongInfo: null,
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
      state.queue[0] = action.payload.id;
      state.currentSongInfo = action.payload;
      state.playing = true;
    },
    addPlayToSong: (state, action: PayloadAction<Song>) => {
      fetch(`http://127.0.0.1:3333/songs/${action.payload.id}/add-play`).then();
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
    addToQueue: (state, action: PayloadAction<number>) => {
      state.queue.push(action.payload);
    },
    removeFromQueue: (state, action: PayloadAction<number>) => {
      state.queue = state.queue.filter((song) => song !== action.payload);
    },
    setSongDetailVisible: (state) => {
      state.isSongDetailVisible = !state.isSongDetailVisible;
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
  addPlayToSong,
  gotoPreviousSong,
  gotoNextSong,
  addToQueue,
  removeFromQueue,
  setSongDetailVisible,
  setVolume,
} = playerSlice.actions;

export default playerSlice.reducer;
