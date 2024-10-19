import { ISong } from "./entities/songs/model/types";

const songs: ISong[] = [
  {
    _id: "1",
    title: "Shape of You",
    artist: "Ed Sheeran",
    text: "The club isn’t the best place to find a lover...",
    listens: 1500000,
    audio: "/audio/shape-of-you.mp3",
    picture: "/images/shape-of-you.jpg",
    comments: [
      {
        _id: "1",
        username: "musicLover23",
        text: "Amazing song! It never gets old.",
      },
      {
        _id: "2",
        username: "edSheeranFan",
        text: "This is my favorite track!",
      },
    ],
  },
  {
    _id: "2",
    title: "Blinding Lights",
    artist: "The Weeknd",
    text: "I’ve been tryna call, I’ve been on my own for long enough...",
    listens: 2500000,
    audio: "/audio/blinding-lights.mp3",
    picture: "/images/blinding-lights.jpg",
    comments: [
      {
        _id: "1",
        username: "weekndFan",
        text: "This song is a masterpiece!",
      },
      {
        _id: "2",
        username: "musicGeek",
        text: "The production on this track is top-notch!",
      },
    ],
  },
  {
    _id: "3",
    title: "Levitating",
    artist: "Dua Lipa",
    text: "If you wanna run away with me, I know a galaxy...",
    listens: 2000000,
    audio: "/audio/levitating.mp3",
    picture: "/images/levitating.jpg",
    comments: [
      {
        _id: "1",
        username: "duaFan",
        text: "This song always gets me dancing!",
      },
      {
        _id: "2",
        username: "popLover",
        text: "Dua Lipa never disappoints.",
      },
    ],
  },
  {
    _id: "4",
    title: "Peaches",
    artist: "Justin Bieber",
    text: "I got my peaches out in Georgia (Oh yeah, s**t)...",
    listens: 1800000,
    audio: "/audio/peaches.mp3",
    picture: "/images/peaches.jpg",
    comments: [
      {
        _id: "1",
        username: "bieberFan",
        text: "This song is such a vibe!",
      },
      {
        _id: "2",
        username: "georgiaLover",
        text: "Can’t get this song out of my head!",
      },
    ],
  },
];

export default songs;
