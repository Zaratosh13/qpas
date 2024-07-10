
import React, { useState } from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import WritingCompany from './pages/writtingCompany'

const LayerSubNav = () => {

  const [activeStep, setActiveStep] = useState(0); 
  const productContent = <div>Step 2 Content</div>;
  const subProductContent = <div>Step 3 Content</div>;
  const riskContent = <div>Risk Content</div>;
  const coverageGroupContent = <div>Coverage Group Content</div>;
  const coverageContent = <div>Coverage Content</div>;
  const baseRateContent = <div>Base Rate Content</div>;
  const factorContent = <div>Factor Content</div>;
  const ratingContent = <div>Rating Content</div>;

  const steps = [
    {
      label: 'Writing Company',
      content: <WritingCompany />,
    },
    {
      label: 'Product',
      content: productContent,
    },
    {
      label: 'Sub Product',
      content: subProductContent,
    },
    {
      label: 'Risk',
      content: riskContent,
    },
    {
      label: 'Coverage Group',
      content: coverageGroupContent,
    },
    {
      label: 'Coverage',
      content: coverageContent,
    },
    {
      label: 'Base Rate',
      content: baseRateContent,
    },
    {
      label: 'Factor',
      content: factorContent,
    },
    {
      label: 'Rating',
      content: ratingContent,
    },
  ];

  const onStepChange = (step) => {
    setActiveStep(step);
  };

  return (
   
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <StepProgressBar
          steps={steps}
          startingStep={0}
          onStepChange={onStepChange}
          onSubmit={() => alert('Form submitted!')}
        />
         <div className="mt-4">
        {steps[activeStep].content} 
      </div>
      </div>
  );
};

export default LayerSubNav;
