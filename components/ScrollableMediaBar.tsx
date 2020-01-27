import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { HomeItem } from '../utils/interfaces';

interface SMBProps {
  numItems: number;
  items: HomeItem[];
  onClick: Function;
}
export const ScrollableMediaBar: React.FC<SMBProps> = ({ items, numItems, onClick }) => {
  const [scroll, setScroll] = useState(0);
  const { left } = useSpring({
    left: -(100 / numItems) * scroll,
  });
  const modifyScroll = (by: number): void => {
    // define new value and bounds
    const newScroll = scroll + by;
    const maxScroll = items.length - numItems;
    const minScroll = 0;

    // modify new value and set depending on bounds
    if (by > 0 && newScroll > maxScroll) {
      setScroll(maxScroll);
    } else if (by < 0 && newScroll < minScroll) {
      setScroll(0);
    } else {
      setScroll(newScroll);
    }
  };
  return (
    <SMBContainer>
      <MediaItemContainer>
        {items.map((item, index) => (
          <MediaItem
            color={item.color}
            index={index}
            key={item.title}
            onClick={(): void => onClick(index)}
            numItems={numItems}
            style={{ left: left.interpolate(left => `${Number(left) + index * (100 / numItems)}%`) }}
          />
        ))}
      </MediaItemContainer>
      <LeftArrow id="left-arrow" size={40} onClick={(): void => modifyScroll(-1)} />
      <RightArrow id="right-arrow" size={40} onClick={(): void => modifyScroll(1)} />
    </SMBContainer>
  );
};

const LeftArrow = styled(IoIosArrowBack)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const RightArrow = styled(IoIosArrowForward)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const SMBContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 200px;
  max-width: 800px;
`;

const MediaItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  width: 100%;
  overflow-x: hidden;
`;

interface MIProps {
  key: any;
  index: number;
  color: string;
  numItems: number;
}
const MediaItem = styled(animated.div)`
  position: absolute;
  height: 200px;
  background-color: ${(props: MIProps): string => props.color};
  width: ${(props: MIProps): number => 100 / props.numItems}%;
  border: 1px solid var(--font-color);
`;
