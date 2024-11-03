'use client';

import { Typography, Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { fetchSongById } from '@/shared/lib/songThunks';
import SongDetails from '@/entities/songs/ui/SongDetails';
import CommentList from '@/entities/comments/ui/CommentList';
import CommentForm from '@/entities/comments/ui/CommentForm';
import Player from '@/shared/ui/player/Player';
import { selectSelectedSong, selectSongsLoading, selectSongsError } from '@/shared/redux/selectors/songSelectors';

const SongDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const dispatch = useAppDispatch();

  const song = useAppSelector(selectSelectedSong);
  const loading = useAppSelector(selectSongsLoading);
  const error = useAppSelector(selectSongsError);

  const [comments, setComments] = useState(song?.comments || []);

  useEffect(() => {
    dispatch(fetchSongById(id));
  }, [dispatch, id]);

  const handleCommentSubmit = (text: string) => {
    const newComment = {
      _id: (comments.length + 1).toString(),
      username: 'guestUser',
      text,
    };
    setComments([...comments, newComment]);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (!song) {
    return <Typography>Song not found</Typography>;
  }

  return (
    <div>
      <Box className="p-1">
        <SongDetails song={song} />
        <CommentList comments={comments} />
        <CommentForm onCommentSubmit={handleCommentSubmit} />
        <Player song={song} />
      </Box>
    </div>
  );
};

export default SongDetailPage;
