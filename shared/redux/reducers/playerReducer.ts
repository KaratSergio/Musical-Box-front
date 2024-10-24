import { PlayerAction, PlayerActionTypes, PlayerState } from '../types';

export const initialPlayerState: PlayerState = {
  active: null,
  pause: true,
  currentTime: 0,
  duration: 0,
  volume: 50,
};

export const playerReducer = (state = initialPlayerState, action: PlayerAction) => {
  switch (action.type) {
    case PlayerActionTypes.PLAY:
      return { ...state, pause: false };
    case PlayerActionTypes.PAUSE:
      return { ...state, pause: true };
    case PlayerActionTypes.SET_ACTIVE:
      return { ...state, active: action.payload };
    case PlayerActionTypes.SET_DURATION:
      return { ...state, duration: action.payload };
    case PlayerActionTypes.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case PlayerActionTypes.SET_VOLUME:
      return { ...state, volume: action.payload };
    default:
      return state;
  }
};
