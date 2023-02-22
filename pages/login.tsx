import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';
import styled, { keyframes } from 'styled-components';

import { PanelDimContainer } from '@/utils/interfaces';
import { PanelDisplay } from '@/components/PanelDisplay';

// To be removed when API is up and running
import { testTokenQuery, testOsusumeCheck, testProfileGen, testGenerateRecs } from '../utils/mockAPI';

const panelDimByPhase: PanelDimContainer = {
  login: {
    width: 500,
    height: 140,
  },
};

const Login: NextPage = () => {
  const router = useRouter();
  const [phase, setPhase] = useState('initialLoad');
  const panelProps = useSpring({
    width: panelDimByPhase[phase]?.width || 300,
    minHeight: panelDimByPhase[phase]?.height || 140,
  });
  const panelEntryProps = useSpring({
    to: {
      transform: 'translateY(0px)',
      opacity: 1,
    },
    from: {
      transform: 'translateY(-75px)',
      opacity: 0,
    },
  });

  // ! ----------------- ! //
  // ! Token setup logic ! //
  // ! ----------------- ! //
  useEffect(() => {
    const { hash } = window.location; // Pull hash out from request, if it exists
    let responseToken;
    if (hash) {
      try {
        // If it does exist, we want to try and rip it apart and get a token from it
        // (which may not work, which is why we try-catch it)
        responseToken = hash
          .split('#')[1]
          .split('&')
          .filter((item: string) => item.split('=')[0] === 'access_token')[0]
          .split('=')[1];
      } catch (e) {
        // Something went wrong parsing the url hash
        console.error('Something went wrong parsing the response from AniList (this may be OK)');
        console.log(e);
      }
    }
    if (responseToken) {
      // If the try-catch didn't fail, this variable should be populated with our desired string
      // which we should persist in local storage
      localStorage.setItem('token', responseToken);

      // Reset the hash in URL so we don't have users looking at garbage
      window.location.hash = '';
    }

    const token = localStorage.getItem('token');
    if (token) {
      // If we have a pre-saved token, try to validate it
      const checkToken = async (): Promise<void> => {
        const result = await fetch(`/api/testToken?token=${token}`)
        const data = await result.json()
        const viewedId = data?.data?.Viewer?.id
        if (viewedId) {
          localStorage.setItem('id', viewedId)
          setPhase('postLogin')
        } else {
          localStorage.removeItem('token')
          setPhase('login')
        }
      };
      checkToken();
    } else {
      setPhase('login');
    }
  }, []);

  // ? ------------------------- ? //
  // ? Per-phase data processing ? //
  // ? ------------------------- ? //
  useEffect(() => {
    // TODO: if nothing major changes between now and release, abstract this a bit to make it less duplicated
    if (phase === 'postLogin') {
      // Validating presence of existing osusume data
      const checkForOsusumeData = async () => {
        const result = await testOsusumeCheck();
        if (result.ok) {
          // If we have osusume data, just load straight into a data view
          // TODO - hoist the data from response to parent state
          setPhase('finishLogin');
        } else {
          // If we do not, we need to generate a profile for them
          setPhase('generateProfile');
        }
      };
      checkForOsusumeData();
    } else if (phase === 'generateProfile') {
      const generateProfile = async () => {
        const profileGenResult = await testProfileGen();
        if (profileGenResult) {
          // If we were able to successfully generate a profile, move on to next phase
          setPhase('finishLogin');
        } else {
          // ??? prof gen failed what do
        }
      };
      generateProfile();
    } else if (phase === 'finishLogin') {
      // Once the generation of the profile has been created, we can move to the home page where we properly
      // send a request for the data
      router.push('/home')
    }
  }, [phase, router]);

  return (
    <LoginContainer>
      <MainPanel style={{ ...panelProps, ...panelEntryProps }}>
        <PanelDisplay phase={phase} />
      </MainPanel>
    </LoginContainer>
  );
};

const bgColoring = keyframes`
  0% {
    filter: contrast(1) hue-rotate(0deg);
    -webkit-filter: contrast(1) hue-rotate(0deg);
  }
  50% {
    filter: contrast(1.2) hue-rotate(15deg);
    -webkit-filter: contrast(1.2) hue-rotate(15deg);
  }
  100% {
    filter: contrast(1) hue-rotate(0deg);
    -webkit-filter: contrast(1) hue-rotate(0deg);
  }
`;

const bgMovement = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 50% 70%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const LoginContainer = styled.div`
  background-image: url('/7.jpg');
  animation: ${bgMovement} 60s ease-in-out infinite, ${bgColoring} 20s infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: 0% 30%;
`;

const MainPanel = styled(animated.div)`
  max-width: 90%;
  width: 500px;
  border: 1px solid #222;
  border-radius: 5px;
  background-color: white;

  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
`;

export default Login;
