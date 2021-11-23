import React from 'react';
import { render } from '@testing-library/react';
import FooterNav from './FooterNav';
import footerNavData from './footerNavData';

let component;

beforeEach(() => {
  const { container } = render(<FooterNav />);
  component = container;
});

describe('Footer nav component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.footer-nav')).toBeInTheDocument();
  });
  it('should render all navigation parts', () => {
    expect(component.querySelectorAll('.footer-nav__col').length).toBe(footerNavData.length);
  });
});
