import { useMemo } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { ISong } from '@/entities/songs/model/types';
import { play, pause, setActive, setDuration, setCurrentTime, setVolume } from '../features/player/model/playerSlice';

export const usePlayerActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => ({
      playSong: () => dispatch(play()),
      pauseSong: () => dispatch(pause()),
      setActiveSong: (song: ISong) => dispatch(setActive(song)),
      setDurationSong: (duration: number) => dispatch(setDuration(duration)),
      setCurrentTimeSong: (time: number) => dispatch(setCurrentTime(time)),
      setVolumeSong: (volume: number) => dispatch(setVolume(volume)),
    }),
    [dispatch]
  );
};
