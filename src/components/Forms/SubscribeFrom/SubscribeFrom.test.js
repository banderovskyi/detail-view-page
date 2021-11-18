import React from 'react';
import { render } from '@testing-library/react';
import SubscribeFrom from './SubscribeFrom';

let component;

beforeEach(() => {
  const { container } = render(<SubscribeFrom id="test-sub-from" />);
  component = container;
});

describe('Subscribe form component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('#test-sub-from')).toBeInTheDocument();
  });
  it('should render should render necessary inputs', () => {
    expect(component.querySelector('input[name="Full Name"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Email"]')).toBeInTheDocument();
  });
  it('should render a button with specific text', () => {
    expect(component.querySelector('button[type="submit"]')).toBeInTheDocument();
    expect(component.querySelector('button[type="submit"] .btn__text').textContent).toBe(
      'Subscribe'
    );
  });
});
