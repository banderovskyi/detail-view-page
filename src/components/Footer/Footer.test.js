import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

let component;

beforeEach(() => {
  const { container } = render(<Footer />);
  component = container;
});

describe('Footer component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.footer')).toBeInTheDocument();
  });
  it('should render all main parts', () => {
    expect(component.querySelector('.footer__logo')).toBeInTheDocument();
    expect(component.querySelector('.footer__nav')).toBeInTheDocument();
    expect(component.querySelector('.footer__footer-social')).toBeInTheDocument();
    expect(component.querySelector('.footer-bottom')).toBeInTheDocument();
  });
});
