import React, { useState } from 'react';
import StepWrapper from '@/shared/ui/StepWrapper';
import { Button, Box } from '@mui/material';

import AddInfoFrom from './steps/AddInfoFrom';
import AddImgForm from './steps/AddImgForm';
import AddSongForm from './steps/AddSongForm';

const AddSongModal = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [songFile, setSongFile] = useState<File | null>(null);

  const handleNext = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <div>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && <AddInfoFrom />}
        {activeStep === 1 && <AddImgForm imageFile={imageFile} setImageFile={setImageFile} />}
        {activeStep === 2 && <AddSongForm songFile={songFile} setSongFile={setSongFile} />}
      </StepWrapper>
      <Box>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </Box>
    </div>
  );
};

export default AddSongModal;
