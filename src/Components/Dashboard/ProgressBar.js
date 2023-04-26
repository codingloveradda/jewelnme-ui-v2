import React, { useState } from 'react'
import styled from '@emotion/styled'

const MainContainer = styled.div`
  width: 100%;
  

  padding: 25px 100px 80px;
`

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
  :before {
    content: '';
    position: absolute;
    background: #F2F2F2;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: '';
    position: absolute;
    background: #A18A66;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const StepStyle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #A18A66;
  border: 3px solid
    ${({ step }) => (step === 'completed' ? '#F2F2F2' : '#F2F2F2')};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepCount = styled.span`
  font-size: 19px;
  color: #f3e7f3;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, -50%);
  width:112px;
  text-align:center;
`

const StepLabel = styled.span`
  font-size: 13px;
  color: #A18A66;

`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #4a154b;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`

const CheckMark = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`

const steps = [
  {
    label: 'Order Confirmed',
    step: 1,
  },
  {
    label: 'Processed',
    step: 2,
  },
  {
    label: 'Polishing',
    
  },
  {
    label: 'Lab Testing',
  
  },
  {
    label: 'Ready to Dispatch',
    
  },
  {
    label: 'Dispatched',
    
  },
  {
    label: 'Delivered',
    
  },
  {
    label: 'Awaiting Feedback',
    
  },
  {
    label: 'Completed',
    
  },
]

const ProgressBar = () => {
  const [activeStep, setActiveStep] = React.useState(3)

  // const nextStep = () => {
  //   setActiveStep(activeStep + 1)
  // }

  // const prevStep = () => {
  //   setActiveStep(activeStep - 1)
  // }

  const totalSteps = steps.length

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

  return (
    <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'}>
              {activeStep > step ? (
                <CheckMark>L</CheckMark>
              ) : (
                <StepCount>{step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
      {/* <ButtonsContainer>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
          Previous
        </ButtonStyle>
        <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
          Next
        </ButtonStyle>
      </ButtonsContainer> */}
    </MainContainer>
    
  )
}

export default ProgressBar;
