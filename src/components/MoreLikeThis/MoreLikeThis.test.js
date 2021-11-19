import React from 'react';
import { render } from '@testing-library/react';
import MoreLikeThis from './MoreLikeThis';

let component;

beforeEach(() => {
  const { container } = render(<MoreLikeThis />);
  component = container;
});

describe('More like this component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.more-like-this')).toBeInTheDocument();
  });
  it('should render the title', () => {
    expect(component.querySelector('.section-title')).toBeInTheDocument();
  });
  it('should render the slider', () => {
    expect(component.querySelector('.more-like-this__slider')).toBeInTheDocument();
  });
});
