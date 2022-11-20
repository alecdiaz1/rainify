import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
  playing: boolean;
  queue: number[];
  history: number[];
}

const initialState: PlayerState = {
  playing: false,
  queue: [],
  history: [],
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
    setCurrentSong: (state, action: PayloadAction<number>) => {
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
    addToQueue: (state, action: PayloadAction<number>) => {
      state.queue.push(action.payload);
    },
    removeFromQueue: (state, action: PayloadAction<number>) => {
      state.queue = state.queue.filter((song) => song !== action.payload);
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
} = playerSlice.actions;

export default playerSlice.reducer;
