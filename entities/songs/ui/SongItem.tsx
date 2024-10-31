import { ISong } from '../model/types';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { usePlayerActions } from '@/hooks/usePlayerActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectAllPlayer } from '@/shared/redux/selectors/playerSelectors';

interface SongItemProps {
  song: ISong;
  active?: boolean;
  play: () => void;
}

const SongItem: React.FC<SongItemProps> = ({ song, active = false, play }) => {
  const router = useRouter();
  const { pauseSong, setActiveSong } = usePlayerActions();
  const { isPaused } = useAppSelector(selectAllPlayer);

  const handleCardClick = () => {
    router.push(`/songs/${song._id}`);
  };

  const togglePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (active) {
      if (isPaused) {
        play();
      } else {
        pauseSong();
      }
    } else {
      setActiveSong(song);
      play();
    }
  };

  return (
    <Card onClick={handleCardClick} sx={{ display: 'flex', alignItems: 'center', mb: 2, cursor: 'pointer' }}>
      <IconButton onClick={togglePlay}>{!active || isPaused ? <PlayArrow /> : <Pause />}</IconButton>

      <CardMedia component="img" sx={{ width: 151 }} image={song.picture} alt={song.title} />

      <CardContent sx={{ flex: '1 0 auto' }}>
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
      </CardContent>

      <IconButton
        onClick={(e) => {
          e.stopPropagation();
        }}
        sx={{ marginLeft: 'auto' }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default SongItem;
