import React from 'react';
import Step from 'Views/Landing/components/Step/Step';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import './Landing.scss';

export const Landing: React.FC = () => {
  const buttonProps = useSpring({
    transform: 'scale(1)',
    from: {
      transform: 'scale(0)',
    },
    config: {
      friction: 25,
      tension: 500,
    },
  });
  return (
    <div id="landing">
      <div
        id="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/landing-bg.jpg'})`,
        }}
      >
        <div id="intro-container">
          <header id="title">osusume</header>
          <div id="subtitle">recommendations by a robot</div>
          <Link to="/login">
            <animated.div style={buttonProps} role="button" id="join-button">
              Find your new binge
            </animated.div>
          </Link>
        </div>
        <div id="bottom-point" />
      </div>
      <div id="steps">
        <Step number={1} title="Sync">
          Log in with your AniList account to sync your watching history
        </Step>
        <Step number={2} title="Analyze">
          osusume analyzes your history and applies weighted metrics to a set of animes pulled from AniList
        </Step>
        <Step number={3} title="Present">
          Once we finish processing, we take the best and show them to you
        </Step>
      </div>
    </div>
  );
};
