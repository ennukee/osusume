import React from 'react';
import './Step.scss';

interface StepProps {
  number: number;
  title: string;
  children: string;
}
const Step: React.FC<StepProps> = ({ number, title, children }) => {
  return (
    <div className="step">
      <div className="line" />
      <div className="step-number">{number}</div>
      <div className="step-title">{title}</div>
      <div className="step-description">{children}</div>
    </div>
  );
};

export default Step;
