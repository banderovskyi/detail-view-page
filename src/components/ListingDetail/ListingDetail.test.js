import React from 'react';
import { render } from '@testing-library/react';
import ListingDetail from './ListingDetail';

let component;

beforeEach(() => {
  const { container } = render(<ListingDetail className="listing-detail-test" />);
  component = container;
});

describe('Listing description component', () => {
  it('should be rendered with props class', () => {
    expect(component.querySelector('.listing-detail-test')).toBeInTheDocument();
  });
  it('should render all parts', () => {
    expect(component.querySelector('.listing-detail__title')).toBeInTheDocument();
    expect(component.querySelector('.listing-detail__description')).toBeInTheDocument();
  });
});
