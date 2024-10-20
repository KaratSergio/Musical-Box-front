"use client";

import songs from "../../../data";
import { Typography, Box } from "@mui/material";
import { useState } from "react";
import SongDetails from "../../../entities/songs/ui/SongDetails";
import CommentList from "../../../entities/comments/ui/CommentList";
import CommentForm from "../../../entities/comments/ui/CommentForm";

const SongDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const song = songs.find((song) => song._id === id);
  const [comments, setComments] = useState(song?.comments || []);

  const handleCommentSubmit = (text: string) => {
    const newComment = {
      _id: (comments.length + 1).toString(),
      username: "guestUser",
      text,
    };
    setComments([...comments, newComment]);
  };

  if (!song) return <Typography>Song not found</Typography>;

  return (
    <Box sx={{ padding: 4 }}>
      <SongDetails song={song} />
      <CommentList comments={comments} />
      <CommentForm onCommentSubmit={handleCommentSubmit} />
    </Box>
  );
};

export default SongDetailPage;
