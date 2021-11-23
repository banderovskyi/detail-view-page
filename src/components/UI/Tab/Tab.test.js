import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tab from './Tab';

let component;

beforeEach(() => {
  const { container } = render(
    <Tab className="test-tab" title="Test Title">
      <p className="test-content">Lorem</p>
    </Tab>
  );
  component = container;
});

describe('Tab component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.test-tab')).toBeInTheDocument();
  });
  it('should render a props title', () => {
    expect(component.querySelector('.tab__title').textContent).toBe('Test Title');
  });
  it('should render a content', () => {
    expect(component.querySelector('.test-content')).toBeInTheDocument();
  });
  it('should be active on click', () => {
    fireEvent.click(document.querySelector('.tab__header'));
    expect(document.querySelector('.tab').className.includes('tab--active')).toBe(true);
    fireEvent.click(document.querySelector('.tab__header'));
    expect(document.querySelector('.tab').className.includes('tab--active')).toBe(false);
  });
});
