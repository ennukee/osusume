import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { HomeItem } from '../utils/interfaces';
import { generateMockItems } from '../utils/generateMockItems';
import { NextPage } from 'next';

import { ScrollableMediaBar } from '../components/ScrollableMediaBar';

/*
  TODO
   ! Fix bug with blank items if you change screen size while scrolled fully to the right
*/

const calculateMaxItems = (width: number): number => {
  // surely there's a better way to do this, but /shrug
  const thresholds = { 300: 1, 450: 2, 600: 3, 750: 4 };
  const result = Object.entries(thresholds).find(([widthCap, itemCap]) => {
    if (width < +widthCap) {
      return itemCap;
    }
  });
  return result?.[1] || 5;
};

interface HomeProps {
  items: HomeItem[];
}
const Home: NextPage<HomeProps> = ({ items }) => {
  const [itemCap, setItemCap] = useState(5);

  useEffect(() => {
    // * Autocalculate item cap on render, done here for SSR purposes
    setItemCap(calculateMaxItems(window.innerWidth));
  }, []);

  useEffect(() => {
    // * Window resize event handler -- change number of items in scrollable media bar according to window width
    function handleWindowChange(event: any): void {
      // what in the world is a resize event interface in TypeScript?
      const newItemCap = calculateMaxItems(event.target.innerWidth);
      if (newItemCap !== itemCap) {
        setItemCap(newItemCap);
      }
    }

    window.addEventListener('resize', handleWindowChange);
    return (): void => window.removeEventListener('resize', handleWindowChange);
  }, [itemCap]);

  const handleMediaBarClick = (index: number): void => {
    console.log(index);
  };

  return (
    <HomeContainer>
      <ScrollableMediaBar numItems={itemCap} items={items} onClick={handleMediaBarClick} />
    </HomeContainer>
  );
};
Home.getInitialProps = (): HomeProps => {
  return { items: generateMockItems(8) };
};

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export default Home;
