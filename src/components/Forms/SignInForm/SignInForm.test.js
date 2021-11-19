import React from 'react';
import { render } from '@testing-library/react';
import SignInForm from './SignInForm';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

let component;

beforeEach(() => {
  const { container } = render(
    <Provider store={store}>
      <SignInForm id="test-log-in-form" />
    </Provider>
  );
  component = container;
});

describe('SignInForm form component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('#test-log-in-form')).toBeInTheDocument();
  });
  it('should render should render necessary inputs', () => {
    expect(component.querySelector('input[name="First Name"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Last Name"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Email"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Password"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Re-type Password"]')).toBeInTheDocument();
  });
  it('should render a button with specific text', () => {
    expect(component.querySelector('button[type="submit"]')).toBeInTheDocument();
    expect(component.querySelector('button[type="submit"] .btn__text').textContent).toBe(
      'Sign Up & Save'
    );
  });
});
