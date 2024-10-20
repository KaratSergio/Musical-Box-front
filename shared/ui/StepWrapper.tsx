import { Stepper, Container, Step, StepLabel, Box, Card } from "@mui/material";
import React, { ReactNode } from "react";

interface StepWrapperProps {
  activeStep: number;
  children?: ReactNode;
}

const steps = ["Song information", "Upload a poster", "Download song"];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep} className="mb-8">
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box display="flex" justifyContent="center" className="my-12 h-64">
        <Card className="w-[600px] p-6"> {children} </Card>
      </Box>
    </Container>
  );
};

export default StepWrapper;
