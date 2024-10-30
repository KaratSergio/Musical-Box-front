import { useEffect } from 'react';
import { IconButton, CardContent, Typography } from '@mui/material';
import { Pause, PlayArrow, VolumeDownRounded, VolumeUp, VolumeOff } from '@mui/icons-material';
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
  const { isPaused, volume, currentTime, duration } = useAppSelector(selectAllPlayer);
  const { playSong, pauseSong, setVolumeSong, setCurrentTimeSong, setDurationSong } = usePlayerActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio(song.audio);
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        if (audio?.duration !== undefined) setDurationSong(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        if (audio?.currentTime !== undefined) setCurrentTimeSong(Math.ceil(audio.currentTime));
      };
    }
  }, [song.audio, setCurrentTimeSong, setDurationSong, volume]);

  useEffect(() => {
    if (audio) audio.volume = volume / 100;
  }, [volume]);

  const togglePlay = () => {
    if (isPaused) {
      playSong();
      audio?.play();
    } else {
      pauseSong();
      audio?.pause();
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => setVolumeSong(Number(e.target.value));
  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentTimeSong(Number(e.target.value));

  return (
    <div className="flex fixed bottom-0 items-center p-4 h-16 w-[900px] bg-gray-400">
      <IconButton onClick={togglePlay}>{isPaused ? <PlayArrow /> : <Pause />}</IconButton>
      <CardContent>
        <Typography component="div" variant="h5">
          {song.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {song.artist}
        </Typography>
      </CardContent>
      <SongProgress left={currentTime} right={duration} onChange={changeCurrentTime} />

      {volume === 0 ? (
        <VolumeOff className="ml-auto" />
      ) : volume < 50 ? (
        <VolumeDownRounded className="ml-auto" />
      ) : (
        <VolumeUp className="ml-auto" />
      )}

      <SongProgress left={volume} right={100} onChange={(e) => changeVolume(e)} />
    </div>
  );
};

export default Player;
