import React from 'react';
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
    <>
      <div
        id="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/landing-bg.jpg'})`,
        }}
      >
        <div id="intro-container">
          <header id="title">osusume</header>
          <div id="subtitle">recommendations by a robot</div>
          <animated.div style={buttonProps} role="button" id="join-button">
            Find your new binge
          </animated.div>
        </div>
        <div id="bottom-point" />
      </div>
    </>
  );
};
