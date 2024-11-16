import { combineReducers } from 'redux';
import playerReducer from '@/features/player/model/playerSlice';
import songReducer from '@/entities/songs/model/songSlice';

const rootReducer = combineReducers({
  player: playerReducer,
  songs: songReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
