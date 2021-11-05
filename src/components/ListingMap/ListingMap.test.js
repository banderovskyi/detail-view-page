import React from 'react';
import { render } from '@testing-library/react';
import ListingMap from './ListingMap';

let component;

beforeEach(() => {
  const { container } = render(<ListingMap location="test-location" />);
  component = container;
});

describe('Listing map component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.listing-map')).toBeInTheDocument();
  });
  it('should render iFrame', () => {
    expect(component.querySelector('.listing-map iframe')).toBeInTheDocument();
  });
  it('should render iFrame with props location', () => {
    expect(
      component.querySelector('.listing-map iframe').getAttribute('src').includes('test-location')
    ).toBeTruthy();
  });
});
