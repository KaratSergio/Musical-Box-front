'use client';

import React from 'react';
import { ISong } from '../model/types';
import { Box, Typography } from '@mui/material';
import SongItem from './SongItem';

interface SongListProps {
  songs: ISong[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  return (
    <Box className="p-4">
      <Typography variant="h4" className="mb-4">
        Songs
      </Typography>
      {songs.map((song) => (
        <Box key={song._id}>
          <SongItem song={song} />
        </Box>
      ))}
    </Box>
  );
};

export default SongList;
