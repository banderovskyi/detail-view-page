import React from 'react';
import { render } from '@testing-library/react';
import FooterBottom from './FooterBottom';

let component;

beforeEach(() => {
  const { container } = render(<FooterBottom />);
  component = container;
});

describe('Footer bottom component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.footer-bottom')).toBeInTheDocument();
  });
  it('should render all main parts', () => {
    expect(component.querySelector('.footer-bottom__associations')).toBeInTheDocument();
    expect(component.querySelector('.footer-bottom__privacy-link')).toBeInTheDocument();
    expect(component.querySelector('.footer-bottom__usm-logo')).toBeInTheDocument();
  });
});
