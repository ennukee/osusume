import React from 'react';
import { Loading } from './Loading';
import styled from 'styled-components';

interface PanelProps {
  phase: string;
}
export const PanelDisplay: React.FC<PanelProps> = ({ phase }) => {
  switch (phase) {
    case 'initialLoad':
      return <Loading>Checking for existing login...</Loading>;
    case 'login':
      return (
        <LoginStateContainer>
          <Header>Welcome</Header>
          <Description>
            Looks like you&apos;re new or have been logged out from your previous session. Use the button below to log
            back in!
          </Description>
          <LoginButton href="https://anilist.co/api/v2/oauth/authorize?client_id=1334&response_type=token">
            Log in
          </LoginButton>
        </LoginStateContainer>
      );
    case 'postLogin':
      return <Loading>Checking for osusume data...</Loading>;
    case 'generateProfile':
      return <Loading slow>Generating preference profile... (new user)</Loading>;
    case 'requestRecs':
      return <Loading slow>Picking out the best recommendations...</Loading>;
    case 'finishLogin':
      return <Loading>Done! Now redirecting...</Loading>;
    default:
      return <div>unknown</div>;
  }
};

const LoginButton = styled.a`
  background-color: var(--pink-light);
  font-size: 14px;
  width: 80%;
  text-align: center;
  border: 1px solid #222;
  border-radius: 3px;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
`;

const Header = styled.div`
  font-size: 24px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Description = styled.div`
  font-size: 14px;
  text-align: center;
`;

const LoginStateContainer = styled.div`
  display: flex;
  min-height: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 20px;
`;
