// CustomStepProgressBar.js
import React from 'react';

const CustomStepProgressBar = ({ steps, activeStep, onStepChange }) => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className={`flex-1 text-center ${index <= activeStep ? 'text-blue-600' : 'text-gray-400'}`}>
            {step.label}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onStepChange(activeStep - 1)}
          disabled={activeStep === 0}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <div className="flex-1 mx-4">{steps[activeStep].content}</div>
        <button
          onClick={() => onStepChange(activeStep + 1)}
          disabled={activeStep === steps.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomStepProgressBar;
