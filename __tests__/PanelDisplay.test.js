import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PanelDisplay } from '../components/PanelDisplay/PanelDisplay';

describe('Views/Login/components/PanelDisplay/PanelDisplay', () => {
  it('accepts initialLoad phase', () => {
    const { container } = render(<PanelDisplay phase={'initialLoad'} />);
    expect(container).toMatchSnapshot();
  });
  it('accepts login phase', () => {
    const { container } = render(<PanelDisplay phase={'login'} />);
    expect(container).toMatchSnapshot();

    // Link has correct attributes
    const link = container.querySelector('a');
    expect(link).toHaveTextContent('Log in');
    expect(link.getAttribute('href')).toBe(
      'https://anilist.co/api/v2/oauth/authorize?client_id=1334&response_type=token',
    );
  });
  it('accepts postLogin phase', () => {
    const { container } = render(<PanelDisplay phase={'postLogin'} />);
    expect(container).toMatchSnapshot();
  });
  it('accepts generateProfile phase', () => {
    const { container } = render(<PanelDisplay phase={'generateProfile'} />);
    expect(container).toMatchSnapshot();
  });
  it('accepts requestRecs phase', () => {
    const { container } = render(<PanelDisplay phase={'requestRecs'} />);
    expect(container).toMatchSnapshot();
  });
  it('accepts finishLogin phase', () => {
    const { container } = render(<PanelDisplay phase={'finishLogin'} />);
    expect(container).toMatchSnapshot();
  });
});
