import { RootState } from '../reducers/index';

export const selectSongs = (state: RootState) => state.songs.songs;

export const selectSongsError = (state: RootState) => state.songs.error;

export const selectSongsLoading = (state: RootState) => state.songs.loading;
