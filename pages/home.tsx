import type firebase from 'firebase/app'

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getDocByID } from '@/fs-client-funcs';
import { testRecEndpointReturn } from '@/utils/mockAPI';

export default function HomePage() {
  const [d, sD] = useState()
  const [fsData, setFsData] = useState<firebase.firestore.DocumentData>()
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

    async function getFSData() {
      const doc = await getDocByID('cMrwApQWSUBZEg0YmEY7')
      console.log(doc)
      setFsData(doc)
    }

    getData()
    getFSData()
  }, [])

  return (
    <HomeContainer>
      {JSON.stringify(fsData)}
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/7.jpg');
  background-size: cover;
  background-position: 0% 30%;
`

// export default HomePage;