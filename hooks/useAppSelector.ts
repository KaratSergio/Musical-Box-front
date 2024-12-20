import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../app/store/rootReducer';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
