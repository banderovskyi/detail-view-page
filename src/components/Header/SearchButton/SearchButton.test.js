import React from 'react';
import { render } from '@testing-library/react';
import SearchButton from './SearchButton';

let component;

beforeEach(() => {
  component = render(
    <SearchButton className="search-button-tested" link="/search/" title="Search" />
  ).container;
});

describe('Header logo component', () => {
  it('should be rendered with proper class name', () => {
    expect(component.querySelector('.search-button-tested')).toBeInTheDocument();
  });
  it('should set link to the home page by default', () => {
    expect(component.querySelector('.search-button-tested').getAttribute('href')).toBe('/search/');
  });
  it('should set alt attribute to be "Company logo" by default', () => {
    expect(component.querySelector('.search-button-tested span').textContent).toBe('Search');
  });
});
