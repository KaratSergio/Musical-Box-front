import { useEffect } from 'react';
import { IconButton, CardContent, Typography } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { useAppSelector } from '@/hooks/useAppSelector';
import { usePlayerActions } from '@/hooks/usePlayerActions';
import { selectAllPlayer } from '@/shared/redux/selectors/playerSelectors';
import { ISong } from '@/entities/songs/model/types';
import SongProgress from './SongProgress';

interface PlayerProps {
  song: ISong;
}

let audio: HTMLAudioElement | null = null;

const Player: React.FC<PlayerProps> = ({ song }) => {
  const { isPaused } = useAppSelector(selectAllPlayer);
  const { playSong, pauseSong } = usePlayerActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio(song.audio);
    }
  }, [song.audio]);

  const play = () => {
    if (isPaused) {
      playSong();
      audio?.play();
    } else {
      pauseSong();
      audio?.pause();
    }
  };

  return (
    <div className="flex fixed bottom-0 items-center p-4 h-16 w-[900px] bg-gray-400">
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          play();
        }}
      >
        {isPaused ? <PlayArrow /> : <Pause />}
      </IconButton>
      <CardContent>
        <Typography component="div" variant="h5">
          {song.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {song.artist}
        </Typography>
      </CardContent>
      <SongProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp className="ml-auto" />
      <SongProgress left={0} right={100} onChange={() => {}} />
    </div>
  );
};

export default Player;
