import React from 'react';
import { render } from '@testing-library/react';
import LogInForm from './LogInForm';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

let component;

beforeEach(() => {
  const { container } = render(
    <Provider store={store}>
      <LogInForm id="test-login-form" />
    </Provider>
  );
  component = container;
});

describe('LogInForm form component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('#test-login-form')).toBeInTheDocument();
  });
  it('should render should render necessary inputs', () => {
    expect(component.querySelector('input[name="Email"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Password"]')).toBeInTheDocument();
  });
  it('should render a button with specific text', () => {
    expect(component.querySelector('button[type="submit"]')).toBeInTheDocument();
    expect(component.querySelector('button[type="submit"] .btn__text').textContent).toBe('Log In');
  });
});
