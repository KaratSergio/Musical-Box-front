import { Typography, Box } from "@mui/material";
import { IComment } from "../model/types";

const CommentList = ({ comments }: { comments: IComment[] }) => {
  return (
    <Box>
      <Typography variant="h6">Comments:</Typography>
      {comments.map((comment) => (
        <Box key={comment._id} sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.primary">
            {comment.username}:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {comment.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CommentList;
