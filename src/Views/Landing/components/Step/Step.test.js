import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Step from './Step.tsx';

describe('Views/Landing/components/Step', () => {
  let container;
  beforeEach(() => {
    ({ container } = render(
      <Step number={1} title="Title">
        Children
      </Step>,
    ));
  });
  describe('props', () => {
    it('uses number prop', () => {
      expect(container.querySelector('.step-number')).toHaveTextContent('1');
    });
    it('uses title  prop', () => {
      expect(container.querySelector('.step-title')).toHaveTextContent('Title');
    });
    it('uses children prop', () => {
      expect(container.querySelector('.step-description')).toHaveTextContent('Children');
    });
  });
});
