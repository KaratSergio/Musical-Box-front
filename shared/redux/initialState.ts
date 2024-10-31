import { initialPlayerState } from '../redux/reducers/playerReducer';
import { initialSongsState } from '../redux/reducers/songReducer';

export const initialState = {
  player: initialPlayerState,
  songs: initialSongsState,
};
