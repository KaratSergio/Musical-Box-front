import { Typography, Box } from "@mui/material";
import { ISong } from "../model/types";
import Link from "next/link";

const SongDetails = ({ song }: { song: ISong }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Link
        href="/songs"
        style={{ marginBottom: "36px", display: "inline-block" }}
      >
        Back to Songs
      </Link>

      <Typography variant="h4" gutterBottom>
        {song.title} by {song.artist}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {song.text}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Listens: {song.listens}
      </Typography>
    </Box>
  );
};

export default SongDetails;
