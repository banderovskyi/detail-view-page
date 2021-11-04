import React from 'react';
import { render } from '@testing-library/react';
import ListingDetail from './ListingDetail';

let component;

beforeEach(() => {
  const { container } = render(<ListingDetail />);
  component = container;
});

describe('Listing description component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.listing-detail')).toBeInTheDocument();
  });
  it('should render description card parts', () => {
    expect(component.querySelector('.description-card__title')).toBeInTheDocument();
    expect(component.querySelector('.description-card__text')).toBeInTheDocument();
  });
});
