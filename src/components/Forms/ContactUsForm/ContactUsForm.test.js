import React from 'react';
import { render } from '@testing-library/react';
import ContactUsForm from './ContactUsForm';

let component;

beforeEach(() => {
  const { container } = render(<ContactUsForm id="test-contact-from" />);
  component = container;
});

describe('ContactUsForm form component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('#test-contact-from')).toBeInTheDocument();
  });
  it('should render should render necessary inputs', () => {
    expect(component.querySelector('input[name="Full Name"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Email"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Phone"]')).toBeInTheDocument();
    expect(component.querySelector('textarea[name="Message"]')).toBeInTheDocument();
  });
  it('should render a button with specific text', () => {
    expect(component.querySelector('button[type="submit"]')).toBeInTheDocument();
    expect(component.querySelector('button[type="submit"] .btn__text').textContent).toBe('Send');
  });
});
