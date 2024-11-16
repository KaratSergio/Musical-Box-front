import { initialPlayerState } from '@/features/player/model/playerSlice';
import { initialSongsState } from '@/entities/songs/model/songSlice';

export const initialState = {
  player: initialPlayerState,
  songs: initialSongsState,
};
