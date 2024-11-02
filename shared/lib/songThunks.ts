import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISong } from '@/entities/songs/model/types';
import { createSong, getAllSongs, getSong } from './songApi';

export const fetchAllSongs = createAsyncThunk('songs/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const songs = await getAllSongs();
    return songs;
  } catch (e) {
    console.error(e);
    return rejectWithValue('Failed to fetch songs');
  }
});

export const fetchSongById = createAsyncThunk('songs/fetchById', async (_id: string, { rejectWithValue }) => {
  try {
    const song = await getSong(_id);
    return song;
  } catch (e) {
    console.error(e);
    return rejectWithValue('Failed to fetch song');
  }
});

export const addSong = createAsyncThunk('songs/add', async (songData: ISong, { rejectWithValue, dispatch }) => {
  try {
    await createSong(songData);

    dispatch(fetchAllSongs());
  } catch (e) {
    console.error(e);
    return rejectWithValue('Failed to create song');
  }
});
