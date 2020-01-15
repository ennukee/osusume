import React from 'react';
import styled from 'styled-components';

interface LoadingProps {
  children: string;
  slow?: boolean;
}
export const Loading: React.FC<LoadingProps> = ({ children, slow }) => {
  return (
    <LoadingPanel>
      <LoadingLabel>{children}</LoadingLabel>
      <LoadingGif src="/static/loading.gif" />
      <SlowLabel>{slow && 'Stay tight, this part may take a few minutes to complete.'}</SlowLabel>
    </LoadingPanel>
  );
};

const LoadingPanel = styled.div`
    position: relative;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const LoadingLabel = styled.div`
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    text-align: center;
`;

const LoadingGif = styled.img`
    width: 150px;
`;

const SlowLabel = styled.div``;