import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../shared/redux/reducers';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
