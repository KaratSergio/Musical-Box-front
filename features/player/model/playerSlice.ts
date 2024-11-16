import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISong } from '@/entities/songs/model/types';

interface PlayerState {
  active: ISong | null;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

export const initialPlayerState: PlayerState = {
  active: null,
  pause: true,
  currentTime: 0,
  duration: 0,
  volume: 50,
};

const playerSlice = createSlice({
  name: 'player',
  initialState: initialPlayerState,
  reducers: {
    play(state: PlayerState) {
      state.pause = false;
    },
    pause(state: PlayerState) {
      state.pause = true;
    },
    setActive(state: PlayerState, action: PayloadAction<ISong>) {
      state.active = action.payload;
    },
    setDuration(state: PlayerState, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
    setCurrentTime(state: PlayerState, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
    setVolume(state: PlayerState, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

export const { play, pause, setActive, setDuration, setCurrentTime, setVolume } = playerSlice.actions;

export default playerSlice.reducer;
