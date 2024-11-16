import axios from 'axios';
import { ISong } from '@/entities/songs/model/types';

const API_URL = 'http://localhost:5088/songs';

export const createSong = async (songData: ISong): Promise<ISong> => {
  const res = await axios.post<ISong>(API_URL, songData);
  return res.data;
};

export const getAllSongs = async (): Promise<ISong[]> => {
  const res = await axios.get<ISong[]>(API_URL);
  return res.data;
};

export const getSong = async (id: string): Promise<ISong> => {
  const res = await axios.get<ISong>(`${API_URL}/${id}`);
  return res.data;
};
