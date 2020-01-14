import React from 'react';
import { Loading } from './components/Loading/Loading';
import './PanelDisplay.scss';

interface PanelProps {
  phase: string;
}
export const PanelDisplay: React.FC<PanelProps> = ({ phase }) => {
  switch (phase) {
    case 'initialLoad':
      return <Loading>Checking for existing login...</Loading>;
    case 'login':
      return (
        <div id="login-state">
          <div id="header">Welcome</div>
          <div id="description">
            Looks like you&apos;re new or have been logged out from your previous session. Use the button below to log
            back in!
          </div>
          <a href="https://anilist.co/api/v2/oauth/authorize?client_id=1334&response_type=token" id="login-button">
            Log in
          </a>
        </div>
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
