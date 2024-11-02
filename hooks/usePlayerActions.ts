import { useMemo } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { ISong } from '@/entities/songs/model/types';
import { play, pause, setActive, setDuration, setCurrentTime, setVolume } from '../shared/redux/reducers/playerReducer';

export const usePlayerActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => ({
      play: () => dispatch(play()),
      pause: () => dispatch(pause()),
      setActive: (song: ISong) => dispatch(setActive(song)),
      setDuration: (duration: number) => dispatch(setDuration(duration)),
      setCurrentTime: (time: number) => dispatch(setCurrentTime(time)),
      setVolume: (volume: number) => dispatch(setVolume(volume)),
    }),
    [dispatch]
  );
};
