import React from 'react';
import { render } from '@testing-library/react';
import HeaderLogo from './HeaderLogo';

let component;

beforeEach(() => {
  component = render(<HeaderLogo className="header-logo-tested" />).container;
});

describe('Header logo component', () => {
  it('should be rendered with proper class name', () => {
    expect(component.querySelector('.header-logo-tested')).toBeInTheDocument();
  });
  it('should set link to the home page by default', () => {
    expect(component.querySelector('.header-logo-tested').getAttribute('href')).toBe('/');
  });
  it('should set alt attribute to be "Company logo" by default', () => {
    expect(component.querySelector('.header-logo-tested img').getAttribute('alt')).toBe('Company logo');
  });
  it('should properly set all the props to attributes', () => {
    const componentWithProps = render(<HeaderLogo className="header-logo-tested" link="/test/" src="logo.png" alt="Test alt" />).container;
    expect(componentWithProps.querySelector('.header-logo-tested').getAttribute('href')).toBe('/test/');
    expect(componentWithProps.querySelector('.header-logo-tested img').getAttribute('src')).toBe('logo.png');
    expect(componentWithProps.querySelector('.header-logo-tested img').getAttribute('alt')).toBe('Test alt');
  });
});
