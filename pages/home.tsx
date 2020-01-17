import React from 'react';
import styled from 'styled-components';

import { ScrollableMediaBar } from '../components/ScrollableMediaBar';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <ScrollableMediaBar
        numItems={4}
        items={[
          {
            color: '#c66',
            title: 'Hana ni Arashi',
          },
          {
            color: '#6c6',
            title: 'Trinity Seven',
          },
          {
            color: '#66c',
            title: 'Okakoro',
          },
          {
            color: '#6cc',
            title: 'Saikou',
          },
        ]}
      />
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;

export default Home;
