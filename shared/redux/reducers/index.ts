import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer';
import { songReducer } from './songReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  songs: songReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
