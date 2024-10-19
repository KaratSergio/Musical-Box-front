"use client";

import SongItem from "./SongItem";
import { ISong } from "../model/types";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

interface TrackListProps {
  songs: ISong[];
}

const SongList: React.FC<TrackListProps> = ({ songs }) => {
  const [activeSongId, setActiveSongId] = useState<string | null>(null);

  const play = (id: string) => {
    setActiveSongId(id === activeSongId ? null : id);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Songs
      </Typography>
      {songs.map((song) => (
        <SongItem
          key={song._id}
          song={song}
          play={() => play(song._id)}
          active={activeSongId === song._id}
        />
      ))}
    </Box>
  );
};

export default SongList;
