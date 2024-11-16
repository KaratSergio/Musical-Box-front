import { ISong } from '../model/types';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { usePlayerActions } from '@/hooks/usePlayerActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectAllPlayer } from '@/features/player/model/playerSelectors';

interface SongItemProps {
  song: ISong;
}

const SongItem: React.FC<SongItemProps> = ({ song }) => {
  const router = useRouter();
  const { pauseSong, playSong, setActiveSong } = usePlayerActions();
  const { isPaused, activeSong } = useAppSelector(selectAllPlayer);

  const handleCardClick = () => {
    router.push(`/songs/${song._id}`);
  };

  const togglePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (activeSong?._id === song._id) {
      if (isPaused) {
        playSong();
      } else {
        pauseSong();
      }
    } else {
      setActiveSong(song);
      playSong();
    }
  };

  return (
    <Card onClick={handleCardClick} className="flex cursor-pointer w-[660px] hover:bg-slate-100">
      <IconButton sx={{ '&:hover': { backgroundColor: 'transparent' } }} onClick={togglePlay}>
        {activeSong?._id !== song._id || isPaused ? (
          <PlayArrow sx={{ fontSize: '80px' }} />
        ) : (
          <Pause sx={{ fontSize: '80px' }} />
        )}
      </IconButton>

      <CardMedia component="img" className="w-full max-w-36" image={song.picture} alt={song.title} />

      <CardContent className="flex-1">
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
        sx={{ width: 100, padding: 2, '&:hover': { backgroundColor: 'transparent' } }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Delete sx={{ fontSize: '40px' }} />
      </IconButton>
    </Card>
  );
};

export default SongItem;
