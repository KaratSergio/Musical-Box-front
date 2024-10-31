'use client';

import React, { useState } from 'react';
import { ISong } from '../model/types';
import { Box, Typography } from '@mui/material';
import SongItem from './SongItem';

interface SongListProps {
  songs: ISong[];
  onSongSelect: (song: ISong) => void;
}

const SongList: React.FC<SongListProps> = ({ songs, onSongSelect }) => {
  const [activeSongId, setActiveSongId] = useState<string | null>(null);

  const play = (song: ISong) => {
    setActiveSongId(song._id);
    onSongSelect(song);
  };

  return (
    <Box className="p-4">
      <Typography variant="h4" className="mb-4">
        Songs
      </Typography>
      {songs.map((song) => (
        <SongItem key={song._id} song={song} play={() => play(song)} active={activeSongId === song._id} />
      ))}
    </Box>
  );
};

export default SongList;
