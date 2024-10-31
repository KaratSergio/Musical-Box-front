import { SongAction, SongActionTypes, SongState } from '../types/songTypes';

export const initialSongsState: SongState = {
  songs: [],
  error: '',
};

export const songReducer = (state: SongState = initialSongsState, action: SongAction): SongState => {
  switch (action.type) {
    case SongActionTypes.FETCH_SONGS:
      return { error: '', songs: action.payload };
    case SongActionTypes.FETCH_SONGS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
