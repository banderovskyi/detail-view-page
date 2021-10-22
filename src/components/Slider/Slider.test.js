import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider from './Slider';

let component;

beforeEach(() => {
  component = render(<Slider />).container;
});

describe('Slider component', () => {
  it('should be rendered with proper class name', () => {
    expect(component.querySelector('.slider')).toBeInTheDocument();
  });
  it('should render the images', () => {
    expect(component.querySelectorAll('img').length).toBeTruthy();
  });
  it('render the buttons', () => {
    expect(component.querySelector('.slider__button--prev')).toBeInTheDocument();
    expect(component.querySelector('.slider__button--next')).toBeInTheDocument();
  });
  it('have main and thumbs parts', () => {
    expect(component.querySelector('.slider__main')).toBeInTheDocument();
    expect(component.querySelector('.slider__thumbs')).toBeInTheDocument();
  });
  it('should have 2 active items', () => {
    expect(component.querySelectorAll('.slider__item--active').length).toBe(2);
  });
  it('should be without transform by default', () => {
    expect(component.querySelector('.slider__wrapper').style.transform).toBe('translateX(-0px)');
  });
  it('should change by items on button click', () => {
    fireEvent.click(component.querySelector('.slider__button--next'));
    fireEvent.click(component.querySelector('.slider__button--next'));

    expect(
      component.querySelectorAll('.slider__item')[2].className.includes('slider__item--active')
    ).toBe(true);

    fireEvent.click(component.querySelector('.slider__button--prev'));

    expect(
      component.querySelectorAll('.slider__item')[1].className.includes('slider__item--active')
    ).toBe(true);

    fireEvent.click(component.querySelector('.slider__button--prev'));
    fireEvent.click(component.querySelector('.slider__button--prev'));

    expect(
      component
        .querySelectorAll('.slider__item')
        [component.querySelectorAll('.slider__item').length - 1].className.includes(
          'slider__item--active'
        )
    ).toBe(true);
  });
  it('should have full screen mode on hover', () => {
    fireEvent.mouseOver(component.querySelector('.slider'));
    fireEvent.click(component.querySelector('.slider__button--full-screen'));
    expect(component.querySelector('.slider').className.includes('slider--full-screen')).toBe(true);
    fireEvent.click(component.querySelector('.slider__button--disable-full-screen'));
    expect(component.querySelector('.slider').className.includes('slider--full-screen')).toBe(
      false
    );
  });
});
