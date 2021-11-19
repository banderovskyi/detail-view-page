import React from 'react';
import { render } from '@testing-library/react';
import CardsSlider from './CardsSlider';
import moreLikeThisData from '../MoreLikeThis/moreLikeThisData';

let component;

beforeEach(() => {
  const { container } = render(<CardsSlider items={moreLikeThisData} />);
  component = container;
});

describe('More like this component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.cards-slider')).toBeInTheDocument();
  });
  it('should render the cards', () => {
    expect(component.querySelectorAll('.cards-slider__item').length).toBe(moreLikeThisData.length);
  });
  it('should render the buttons', () => {
    expect(component.querySelector('.cards-slider__prev-button')).toBeInTheDocument();
    expect(component.querySelector('.cards-slider__next-button')).toBeInTheDocument();
  });
});
