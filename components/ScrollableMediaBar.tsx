import React from 'react';
import styled from 'styled-components';

interface Item {
  color: string;
  title: string;
  // TODO: expand further and extrapolate to utils/interfaces.ts when finished
}
interface SMBProps {
  numItems: number;
  items: Item[]; // TODO: write interface for subitems
}
export const ScrollableMediaBar: React.FC<SMBProps> = ({ items, numItems }) => {
  return (
    <SMBContainer>
      {items.map((item, index) => (
        <MediaItem color={item.color} key={item.title} index={index} numItems={numItems}>
          {item.color}
        </MediaItem>
      ))}
    </SMBContainer>
  );
};

const SMBContainer = styled.div`
  position: relative;
  width: 100%;
`;

interface MIProps {
  key: any;
  numItems: number;
  index: number;
  color: string;
}
const MediaItem = styled.div`
  position: absolute;
  color: ${(props: MIProps): string => props.color};
  left: ${(props: MIProps): number => props.index * (100 / props.numItems)}%;
  height: 100%;
  width: ${(props: MIProps): number => 100 / props.numItems}%;
`;
