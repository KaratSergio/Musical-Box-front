import { useEffect, useCallback } from 'react';
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

  const initializeAudio = useCallback(() => {
    if (audio) {
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        if (audio?.duration !== undefined) setDurationSong(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        if (audio?.currentTime !== undefined) setCurrentTimeSong(Math.ceil(audio.currentTime));
      };
    }
  }, [volume, setDurationSong, setCurrentTimeSong]);

  useEffect(() => {
    if (!audio) {
      audio = new Audio(song.audio);
      initializeAudio();
    } else {
      audio.volume = volume / 100;
    }
  }, [song.audio, volume, initializeAudio]);

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
    <div className="flex fixed bottom-0 items-center p-4 h-16 w-full bg-gray-400">
      <IconButton onClick={togglePlay} className="text-white mr-2">
        {isPaused ? <PlayArrow /> : <Pause />}
      </IconButton>
      <CardContent className="flex flex-col">
        <Typography component="div" variant="h5" className="text-lg font-semibold">
          {song.title}
        </Typography>
        <Typography variant="subtitle1" className="text-gray-200 text-sm">
          {song.artist}
        </Typography>
      </CardContent>
      <div className="flex-grow px-4">
        <SongProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
      </div>
      <div className="flex items-center ml-auto mr-4">
        {volume === 0 ? (
          <VolumeOff className="text-white" />
        ) : volume < 50 ? (
          <VolumeDownRounded className="text-white" />
        ) : (
          <VolumeUp className="text-white" />
        )}
      </div>
      <div className="w-1/4">
        <SongProgress left={volume} right={100} onChange={changeVolume} />
      </div>
    </div>
  );
};

export default Player;
