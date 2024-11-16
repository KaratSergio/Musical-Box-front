import { RootState } from '../../../app/store/rootReducer';

export const selectSongs = (state: RootState) => state.songs.songs;

export const selectSongsError = (state: RootState) => state.songs.error;

export const selectSongsLoading = (state: RootState) => state.songs.loading;

export const selectSelectedSong = (state: RootState) => state.songs.selectedSong;
