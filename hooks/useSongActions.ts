import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useAppDispatch } from './useAppDispatch';
import * as SongActions from '../shared/redux/actions/songActions';
import * as SongThunks from '../shared/lib/songThunks'

export const useSongActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => ({
      ...bindActionCreators(SongActions, dispatch),
      ...bindActionCreators(SongThunks, dispatch),
    }),
    [dispatch]
  );
};
