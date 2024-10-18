import SongItem from "./SongItem";
import { ISong } from "../model/types";
import { Box, Typography } from "@mui/material";

interface TrackListProps {
  songs: ISong[];
}

const SongList: React.FC<TrackListProps> = ({ songs }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Songs
      </Typography>
      {songs.map((song) => (
        <SongItem key={song._id} song={song} />
      ))}
    </Box>
  );
};

export default SongList;
