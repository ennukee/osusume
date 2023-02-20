import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import { testRecEndpointReturn } from '../utils/mockAPI';


const HomePage: NextPage = () => {
  const [d, sD] = useState()
  useEffect(() => {
    async function getData() {
      const resp = await testRecEndpointReturn();
      if (!resp.ok) {
        // TODO: Handle bad rec endpoint here
        return
      }
      const json = await resp.json();
      sD(json.recs)
    }
    getData()
  }, [])

  return (
    <HomeContainer>
      {JSON.stringify(d)}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/7.jpg');
  background-size: cover;
  background-position: 0% 30%;
`

export default HomePage;