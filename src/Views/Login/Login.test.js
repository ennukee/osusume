/* eslint-disable @typescript-eslint/explicit-function-return-type */
// This isn't a TS file
import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Login } from './Login';

describe('Views/Login/Login', () => {
  const setup = ({ hash, push }) => {
    const { container } = render(
      <Login
        location={{
          hash: hash ?? '#access_token=123abc&type=Bearer&expires=1',
        }}
        history={{
          push: push ?? jest.fn(),
        }}
      />,
    );
    return { container };
  };
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    window.localStorage.clear();
  });
  it('puts token in storage & changes visual URL on anilist redirect', () => {
    const pushFn = jest.fn();
    const { container } = setup({ push: pushFn });
    expect(localStorage.getItem('token')).toBe('123abc');
    expect(pushFn).toHaveBeenCalledWith('/login');
  });
  it('goes to login phase if no redirect & no token', async () => {
    const { container } = setup({ hash: '' });
    expect(container.querySelector('#login-state')).not.toBeNull();
  });
  // TODO when api implemented, mock each step and test that each step occurs properly with its associated error state
});
