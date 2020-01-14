import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Loading } from './Loading';

describe('Views/Login/components/PanelDisplay/components/Loading', () => {
  it('puts children as the body of the label div', () => {
    const { container } = render(<Loading>Children</Loading>);
    expect(container.querySelector('.label')).toHaveTextContent('Children');
  });
  it('renders slow-label message if param is passed', () => {
    const { container } = render(<Loading slow>Children</Loading>);
    expect(container.querySelector('.slow-label')).toHaveTextContent(
      'Stay tight, this part may take a few minutes to complete.',
    );
  });
});
