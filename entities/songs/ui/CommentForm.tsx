import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

const CommentForm = ({
  onCommentSubmit,
}: {
  onCommentSubmit: (text: string) => void;
}) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = () => {
    if (commentText.trim()) {
      onCommentSubmit(commentText);
      setCommentText("");
    }
  };

  return (
    <Box component="form" sx={{ mt: 4 }}>
      <TextField
        label="Add a comment"
        fullWidth
        multiline
        rows={4}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
        Post Comment
      </Button>
    </Box>
  );
};

export default CommentForm;
