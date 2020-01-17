import React from 'react';
// import Step from 'Views/Landing/components/Step/Step';
import Link from 'next/link';
import { useSpring, animated } from 'react-spring';
import styled, { keyframes } from 'styled-components';
import { LandingStep } from '../components/LandingStep';

const Landing: React.FC = () => {
  const buttonProps = useSpring({
    transform: 'scale(1)',
    from: {
      transform: 'scale(0)',
    },
    config: {
      friction: 24,
      tension: 500,
    },
  });
  return (
    <>
      <LandingDiv>
        <Container>
          <IntroContainer>
            <Title>OSUSUME</Title>
            <Subtitle>recommendations by a robot</Subtitle>
            <Link href="/login">
              <JoinButton style={buttonProps}>Find your new binge</JoinButton>
            </Link>
          </IntroContainer>
          <Diamond />
        </Container>
        <Steps>
          <LandingStep number={1} title="Sync">
            Log in with your AniList account to sync your watching history
          </LandingStep>
          <LandingStep number={2} title="Analyze">
            osusume analyzes your history and applies weighted metrics to a set of animes pulled from AniList
          </LandingStep>
          <LandingStep number={3} title="Present">
            Once we finish processing, we take the best and show them to you
          </LandingStep>
        </Steps>
      </LandingDiv>
    </>
  );
};

const Steps = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 30px;
  padding: 0 10%;
`;

const joinButtonPulse = keyframes`
  0% {
    background-color: var(--blue-light);
  }
  50% {
    background-color: var(--pink-light);
  }
  100% {
    background-color: var(--blue-light);
  }
`;
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

const JoinButton = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  margin-top: 40px;
  font-size: 16px;
  border: 1px solid var(--font-color-tint);
  color: var(--font-color-tint);
  background-color: lightblue;
  animation: ${joinButtonPulse} 4s infinite;
  cursor: pointer;
`;

const Subtitle = styled.div`
  font-size: 1.6em;
  font-weight: bold;
`;

const Title = styled.header`
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 5em;
  line-height: 0.9em;
`;

const Diamond = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%) rotate(45deg);
  height: 40px;
  width: 40px;
  border: 1px solid var(--font-color-tint);
  animation: ${joinButtonPulse} 4s infinite;
`;

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  padding: 20px;
  border-radius: 3px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  border-bottom: 1px solid var(--font-color-tint);
  background-image: url('/static/landing-bg.jpg');
  background-size: cover;
  background-size: 150%;
  background-position: 0% 50%;
  animation: ${bgMovement} 60s ease-in-out infinite, ${bgColoring} 20s infinite;
`;

const LandingDiv = styled.div`
  a {
    text-decoration: none;
  }
`;

export default Landing;
