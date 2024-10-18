export interface IComment {
  _id: string;
  username: string;
  text: string;
}

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
