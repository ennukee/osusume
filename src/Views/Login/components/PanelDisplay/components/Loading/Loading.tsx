import React from 'react';
import './Loading.scss';

interface LoadingProps {
  children: string;
  slow?: boolean;
}
export const Loading: React.FC<LoadingProps> = ({ children, slow }) => {
  return (
    <div id="loading-panel">
      <div className="label">{children}</div>
      <img className="loading-gif" src={`${process.env.PUBLIC_URL}/loading.gif`} />
      <div className="slow-label">{slow && 'Stay tight, this part may take a few minutes to complete.'}</div>
    </div>
  );
};
