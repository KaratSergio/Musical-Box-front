import { IComment } from "../../comments/model/types";

export interface ISong {
  _id: string;
  title: string;
  artist: string;
  text: string;
  listens: number;
  audio: string;
  picture: string;
  comments: IComment[];
}
