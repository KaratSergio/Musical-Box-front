import { useMemo } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { fetchAllSongs, fetchSongById, addSong } from '../shared/lib/songThunks';
import { ISong } from '@/entities/songs/model/types';

export const useSongActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => ({
      fetchAllSongs: () => dispatch(fetchAllSongs()),
      fetchSongById: (id: string) => dispatch(fetchSongById(id)),
      addSong: (songData: ISong) => dispatch(addSong(songData)),
    }),
    [dispatch]
  );
};
