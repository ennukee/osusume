import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { PanelDimContainer } from 'Interfaces/main';
import { PanelDisplay } from 'Views/Login/components/PanelDisplay/PanelDisplay';

// To be removed when API is up and running
import { testTokenQuery, testOsusumeCheck, testProfileGen, testGenerateRecs } from 'Utils/mockAPI';

import './Login.scss';

const panelDimByPhase: PanelDimContainer = {
  login: {
    width: 500,
    height: 140,
  },
};
interface LoginProps {
  location: any; // react-router interface
  history: any; // react-router interface
}
export const Login: React.FC<LoginProps> = ({ location, history }) => {
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
    const { hash } = location; // Pull hash out from request, if it exists
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
        console.error('Something went wrong parsing the response from AniList');
        console.log(e);
      }
    }
    if (responseToken) {
      // If the try-catch didn't fail, this variable should be populated with our desired string
      // which we should persist in local storage
      localStorage.setItem('token', responseToken);

      // Reset the visible URL so we don't have users looking at garbage
      history.push('/login');
    } else {
      // If it isn't populated, we should assume that there wasn't a hash (or a bad one), then try
      // to read from localStorage instead
      const token = localStorage.getItem('token');
      if (token) {
        // If we have a pre-saved token, try to validate it
        const checkToken = async () => {
          const result = await testTokenQuery();
          if (result.ok) {
            // If we have a usable token pre-cached, move on to the post-login logic
            console.log('boop');
            setPhase('postLogin');
          } else {
            localStorage.removeItem('token'); // remove outdated token
            setPhase('login'); // go to login phase so user can log in again
          }
        };
        checkToken();
      } else {
        setPhase('login');
      }
    }
  }, [location, history]);

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
          setPhase('requestRecs');
        } else {
          // ??? prof gen failed what do
        }
      };
      generateProfile();
    } else if (phase === 'requestRecs') {
      const generateRecs = async () => {
        const recGenResult = await testGenerateRecs();
        if (recGenResult.ok) {
          setPhase('finishLogin');
        } else {
          // ??? unable to generate recs what do
        }
      };
      generateRecs();
    } else if (phase === 'finishLogin') {
      // Lift up the state containing our data so we can move to the Portal view
    }
  }, [phase]);

  return (
    <div
      id="login"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/landing-bg.jpg'})`,
      }}
    >
      <animated.div id="main-panel" style={{ ...panelProps, ...panelEntryProps }}>
        <PanelDisplay phase={phase} />
      </animated.div>
    </div>
  );
};
