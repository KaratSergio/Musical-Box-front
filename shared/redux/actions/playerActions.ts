import { PlayerActionTypes, PlayerAction } from '../types';
import { ISong } from '../../../entities/songs/model/types';

export const play = (): PlayerAction => ({ type: PlayerActionTypes.PLAY });
export const pause = (): PlayerAction => ({ type: PlayerActionTypes.PAUSE });
export const setActive = (song: ISong): PlayerAction => ({
  type: PlayerActionTypes.SET_ACTIVE,
  payload: song,
});
