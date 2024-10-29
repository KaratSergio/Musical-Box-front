import { RootState } from '../reducers/index';

export const selectActiveSong = (state: RootState) => state.player.active;

export const selectIsPaused = (state: RootState) => state.player.pause;

export const selectCurrentTime = (state: RootState) => state.player.currentTime;

export const selectDuration = (state: RootState) => state.player.duration;

export const selectVolume = (state: RootState) => state.player.volume;

export const selectAllPlayer = (state: RootState) => ({
  activeSong: state.player.active,
  isPaused: state.player.pause,
  currentTime: state.player.currentTime,
  duration: state.player.duration,
  volume: state.player.volume,
});
