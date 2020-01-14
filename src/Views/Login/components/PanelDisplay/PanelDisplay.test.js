import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PanelDisplay } from './PanelDisplay';

describe('Views/Login/components/PanelDisplay/PanelDisplay', () => {
  it('accepts initialLoad phase', () => {
    const { container } = render(<PanelDisplay phase={'initialLoad'} />);
    expect(container.querySelector('.label')).toHaveTextContent('Checking for existing login...');
  });
  it('accepts login phase', () => {
    const { container } = render(<PanelDisplay phase={'login'} />);

    // Container has ID
    expect(container.firstElementChild.id).toBe('login-state');

    // Header has right text
    expect(container.querySelector('#header')).toHaveTextContent('Welcome');

    // Description has right text
    expect(container.querySelector('#description')).toHaveTextContent(
      "Looks like you're new or have been logged out from your previous session. Use the button below to log back in!",
    );

    // Link has correct attributes
    const link = container.querySelector('a#login-button');
    expect(link).toHaveTextContent('Log in');
    expect(link.getAttribute('href')).toBe(
      'https://anilist.co/api/v2/oauth/authorize?client_id=1334&response_type=token',
    );
  });
  it('accepts postLogin phase', () => {
    const { container } = render(<PanelDisplay phase={'postLogin'} />);
    expect(container.querySelector('.label')).toHaveTextContent('Checking for osusume data...');
  });
  it('accepts generateProfile phase', () => {
    const { container } = render(<PanelDisplay phase={'generateProfile'} />);
    expect(container.querySelector('.label')).toHaveTextContent('Generating preference profile... (new user)');
    expect(container.querySelector('.slow-label')).not.toHaveTextContent(''); // should have slow label
  });
  it('accepts requestRecs phase', () => {
    const { container } = render(<PanelDisplay phase={'requestRecs'} />);
    expect(container.querySelector('.label')).toHaveTextContent('Picking out the best recommendations...');
    expect(container.querySelector('.slow-label')).not.toHaveTextContent(''); // should have slow label
  });
  it('accepts finishLogin phase', () => {
    const { container } = render(<PanelDisplay phase={'finishLogin'} />);
    expect(container.querySelector('.label')).toHaveTextContent('Done! Now redirecting...');
  });
});
