import React from 'react';
import { render } from '@testing-library/react';
import ListingSubsctibe from './ListingSubsctibe';

let component;

beforeEach(() => {
  const { container } = render(<ListingSubsctibe className="listing-sub-test" />);
  component = container;
});

describe('Listing Subscribe title component', () => {
  it('should be rendered with props class', () => {
    expect(component.querySelector('.listing-sub-test')).toBeInTheDocument();
  });
  it('should render a subscribe form', () => {
    expect(component.querySelector('#aside-subscribe')).toBeInTheDocument();
  });
});
