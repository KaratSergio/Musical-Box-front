'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { fetchAllSongs } from '@/shared/lib/songThunks';
import { selectSongs, selectSongsError } from '@/shared/redux/selectors/songSelectors';
import SongList from '@/entities/songs/ui/SongList';
import Player from '@/shared/ui/player/Player';
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
