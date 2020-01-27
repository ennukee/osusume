import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ScrollableMediaBar } from '../components/ScrollableMediaBar';

describe('ScrollableMediaBar', () => {
  it.todo('calls the onClick prop with item index when clicked');
  it.todo('scrolls the view when left/right arrow clicked');
  it.todo('does not scroll back if left arrow clicked at min offset');
  it.todo('does not scroll forward if right arrow clicked at max offset');
  it.todo('displays values given to items prop');
  it.todo('only has numItems items on screen at one time');
});
