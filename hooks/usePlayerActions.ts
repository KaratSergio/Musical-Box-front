import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useAppDispatch } from './useAppDispatch';
import * as PlayerActions from '../shared/redux/actions/playerActions';

export const usePlayerActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(PlayerActions, dispatch), [dispatch]);
};
