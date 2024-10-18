import { ISong } from "../model/types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

interface TrackItemProps {
  song: ISong;
}

const SongItem: React.FC<TrackItemProps> = ({ song }) => {
  return (
    <Card sx={{ display: "flex", mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={song.picture}
        alt={song.title}
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          {song.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {song.artist}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          listens: {song.listens}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          comments: {song.comments.length}
        </Typography>
        <Button variant="outlined" sx={{ mt: 1 }}>
          play
        </Button>
      </CardContent>
    </Card>
  );
};

export default SongItem;
