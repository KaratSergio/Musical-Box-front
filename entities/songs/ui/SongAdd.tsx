import React, { useState } from "react";
import StepWrapper from "@/shared/ui/StepWrapper";
import { Button, Box } from "@mui/material";

const SongAdd = () => {
  const [activeStep, setActiveStep] = useState(0);

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
        {activeStep === 0 && <h1>STEP 1</h1>}
        {activeStep === 1 && <h1>STEP 2</h1>}
        {activeStep === 2 && <h1>STEP 3</h1>}
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

export default SongAdd;
