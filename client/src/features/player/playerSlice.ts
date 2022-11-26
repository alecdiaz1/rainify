import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RefObject } from 'react';
import { Song } from 'features/songs';
import { Slide, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { QueueSong } from 'features/player/types';

interface PlayerState {
  playing: boolean;
  queue: QueueSong[];
  history: QueueSong[];
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
      const newPrevSong = state.queue[0];
      const prevSong = state.history[state.history.length - 1];
      if (!prevSong || !(newPrevSong === prevSong)) {
        state.history.push(newPrevSong);
      }
      state.queue[0] = { ...action.payload, queueId: uuidv4() };
      state.playing = true;
    },
    setCurrentSongFromQueue: (state, action: PayloadAction<string>) => {
      state.history.push(state.queue[0]);

      let newQueue = state.queue;
      let currentQueueSong = newQueue.shift()!;
      while (action.payload !== currentQueueSong.queueId) {
        currentQueueSong = newQueue.shift()!;
      }

      state.queue = [currentQueueSong, ...newQueue];
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
        state.playing = true;
      } else {
        state.playing = false;
      }
    },
    addToQueue: (state, action: PayloadAction<Song>) => {
      toast.success('Added to queue!', {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        transition: Slide,
      });
      state.queue.push({ ...action.payload, queueId: uuidv4() });
    },
    removeFromQueue: (state, action: PayloadAction<QueueSong>) => {
      state.queue = state.queue.filter(
        (song) => song.queueId !== action.payload.queueId,
      );
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
  setCurrentSongFromQueue,
  gotoPreviousSong,
  gotoNextSong,
  addToQueue,
  removeFromQueue,
  setSongDetailVisible,
  setVolume,
} = playerSlice.actions;

export default playerSlice.reducer;
