import React from 'react';
import { render } from '@testing-library/react';
import ListingTitle from './ListingTitle';

let component;

beforeEach(() => {
  const { container } = render(<ListingTitle className="listing-title-test" />);
  component = container;
});

describe('Listing title component', () => {
  it('should be rendered with props class', () => {
    expect(component.querySelector('.listing-title-test')).toBeInTheDocument();
  });
  it('should render all parts', () => {
    expect(component.querySelector('.listing-title__address')).toBeInTheDocument();
    expect(component.querySelector('.listing-title__town')).toBeInTheDocument();
    expect(component.querySelector('.listing-title__state')).toBeInTheDocument();
    expect(component.querySelector('.listing-title__zipcode')).toBeInTheDocument();
  });
});
