import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlayerState {
  playing: boolean;
  queue: number[];
  history: number[];
}

const initialState: PlayerState = {
  playing: false,
  queue: [],
  history: [],
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state) => {
      state.playing = true
    },
    pause: (state) => {
      state.playing = false
    },
    setCurrentSong: (state, action: PayloadAction<number>) => {
      state.queue[0] = action.payload
    },
    addToQueue: (state, action: PayloadAction<number>) => {
      state.queue.push(action.payload)
    },
    removeFromQueue: (state, action: PayloadAction<number>) => {
      state.queue = state.queue.filter(song => song !== action.payload)
    },
  }
})

export const { play, pause, setCurrentSong, addToQueue, removeFromQueue } = playerSlice.actions

export default playerSlice.reducer
