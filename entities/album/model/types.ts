import { ISong } from "../../song/model/types";

export interface IAlbum {
  _id: string;
  title: string;
  author: string;
  songs: ISong[];
}
