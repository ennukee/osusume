import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LandingStep } from '../components/LandingStep.tsx';

describe('components/LandingStep', () => {
  let container;
  beforeEach(() => {
    ({ container } = render(
      <LandingStep number={1} title="Title">
        Children
      </LandingStep>,
    ));
  });
  describe('props', () => {
    it('matches snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
