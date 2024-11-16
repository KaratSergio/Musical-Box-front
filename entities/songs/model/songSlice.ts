import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISong } from '@/entities/songs/model/types';
import { fetchAllSongs, fetchSongById, addSong } from './songThunks';

interface SongState {
  songs: ISong[];
  selectedSong: ISong | null;
  error: string | null;
  loading: boolean;
}

export const initialSongsState: SongState = {
  songs: [],
  selectedSong: null,
  error: null,
  loading: false,
};

const songSlice = createSlice({
  name: 'songs',
  initialState: initialSongsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSongs.pending, startLoading)
      .addCase(fetchAllSongs.fulfilled, (state, action: PayloadAction<ISong[]>) => {
        state.songs = action.payload;
        stopLoading(state);
      })
      .addCase(fetchAllSongs.rejected, (state, action) => {
        stopLoading(state);
        setError(state, action.payload);
      })
      .addCase(fetchSongById.pending, startLoading)
      .addCase(fetchSongById.fulfilled, (state, action: PayloadAction<ISong>) => {
        state.selectedSong = action.payload;
        stopLoading(state);
      })
      .addCase(fetchSongById.rejected, (state, action) => {
        stopLoading(state);
        setError(state, action.payload);
      })
      .addCase(addSong.pending, startLoading)
      .addCase(addSong.fulfilled, stopLoading)
      .addCase(addSong.rejected, (state, action) => {
        stopLoading(state);
        setError(state, action.payload);
      });
  },
});

const startLoading = (state: SongState) => {
  state.loading = true;
  state.error = null;
};

const stopLoading = (state: SongState) => {
  state.loading = false;
};

const setError = (state: SongState, payload: unknown) => {
  state.error = payload as string | null;
};

export default songSlice.reducer;
