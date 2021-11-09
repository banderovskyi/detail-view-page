import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListingTabs from './ListingTabs';

let component;

beforeEach(() => {
  const { container } = render(<ListingTabs className="tabs-test" />);
  component = container;
});

describe('ListingTabs component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.tabs-test')).toBeInTheDocument();
  });
  it('should render tabs', () => {
    expect(component.querySelector('.listing-tabs__item')).toBeInTheDocument();
  });
  it('should have first tab open', () => {
    expect(component.querySelectorAll('.tab')[0].className.includes('tab--active')).toBe(true);
  });
  it('should open and close on click', () => {
    const clickedTab = component.querySelectorAll('.tab')[1];
    fireEvent.click(clickedTab.querySelector('.tab__header'));
    expect(clickedTab.className.includes('tab--active')).toBe(true);
    fireEvent.click(clickedTab.querySelector('.tab__header'));
    expect(clickedTab.className.includes('tab--active')).toBe(false);
  });
});
