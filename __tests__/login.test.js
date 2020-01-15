/* eslint-disable @typescript-eslint/explicit-function-return-type */
// This isn't a TS file
import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../pages/login';

describe('Views/Login/Login', () => {
  const setup = ({ hash } = {}) => {
    window.location.hash = hash ?? '#access_token=123abc&type=Bearer&expires=1';
    return render(<Login />);
  };
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    window.localStorage.clear();
  });
  it('puts token in storage & changes visual URL on anilist redirect', () => {
    setup();
    expect(localStorage.getItem('token')).toBe('123abc');
    expect(window.location.hash).toBe('');
  });
  it('goes to login phase if no redirect & no token', async () => {
    const { getByText } = setup({ hash: '' });
    expect(getByText('Welcome')).not.toBeNull();
  });
  // TODO when api implemented, mock each step and test that each step occurs properly with its associated error state
});
