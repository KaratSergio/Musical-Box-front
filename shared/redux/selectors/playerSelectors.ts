import { createSelector } from 'reselect';
import { RootState } from '../reducers/index';

export const selectActiveSong = (state: RootState) => state.player.active;
export const selectIsPaused = (state: RootState) => state.player.pause;
export const selectCurrentTime = (state: RootState) => state.player.currentTime;
export const selectDuration = (state: RootState) => state.player.duration;
export const selectVolume = (state: RootState) => state.player.volume;

export const selectAllPlayer = createSelector(
  [selectActiveSong, selectIsPaused, selectCurrentTime, selectDuration, selectVolume],
  (activeSong, isPaused, currentTime, duration, volume) => ({
    activeSong,
    isPaused,
    currentTime,
    duration,
    volume,
  })
);
