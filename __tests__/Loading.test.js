import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Loading } from '../components/PanelDisplay/Loading';

describe('Views/Login/components/PanelDisplay/components/Loading', () => {
  it('puts children as the body of the label div', () => {
    const { container } = render(<Loading>Children</Loading>);
    expect(container).toMatchSnapshot();
  });
  it('renders slow-label message if param is passed', () => {
    const { container } = render(<Loading slow>Children</Loading>);
    expect(container).toMatchSnapshot();
  });
});
