import { Box, TextField } from '@mui/material';

const AddInfoFrom = () => {
  return (
    <div>
      <Box>
        <TextField label={'title'} />
        <TextField label={'artist'} />
        <TextField label={'description'} multiline rows={4} />
      </Box>
    </div>
  );
};

export default AddInfoFrom;
