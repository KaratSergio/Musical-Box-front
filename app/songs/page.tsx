'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { fetchAllSongs } from '@/entities/songs/model/songThunks';
import { selectSongs, selectSongsError } from '@/entities/songs/model/songSelectors';
import SongList from '@/entities/songs/ui/SongList';
import Player from '@/features/player/ui/Player';
import { Typography } from '@mui/material';

const SongsPage = () => {
  const dispatch = useAppDispatch();
  const songs = useAppSelector(selectSongs);
  const error = useAppSelector(selectSongsError);

  useEffect(() => {
    dispatch(fetchAllSongs());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center">
      {error && <Typography color="error">{error}</Typography>}
      <SongList songs={songs} />
      <Player />
    </div>
  );
};

export default SongsPage;
