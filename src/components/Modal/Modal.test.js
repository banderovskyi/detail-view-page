import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import App from '../../App';
import Modal from './Modal';

let component;

beforeEach(() => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  component = container;
});

describe('Modal component', () => {
  it('should properly open a "Sign Up" modal on favorite click', () => {
    fireEvent.click(component.querySelector('a[href="/sign-up/"]'));
    console.log(component.querySelector('#modal-signup').className);
    expect(component.querySelector('#modal-signup').className.includes('overlay--active')).toBe(
      true
    );
    expect(document.querySelector('#modal-signup')).toBeInTheDocument();
    fireEvent.click(component.querySelector('#modal-signup .modal__close'));
    expect(component.querySelector('#modal-signup')).toBeFalsy();
  });

  it('should properly open a "Login" modal on favorite click', () => {
    fireEvent.click(component.querySelector('.toolbar__btn-favorite'));
    console.log(component.querySelector('#favorite-modal').className);
    expect(component.querySelector('#favorite-modal').className.includes('overlay--active')).toBe(
      true
    );
    expect(document.querySelector('#modal-login')).toBeInTheDocument();
    fireEvent.click(component.querySelector('#favorite-modal .modal__close'));
    expect(component.querySelector('#favorite-modal')).toBeFalsy();
  });

  it('should properly open a "Contact us" modal', () => {
    fireEvent.click(component.querySelector('.toolbar__btn-contact'));
    console.log(component.querySelector('#contact-modal').className);
    expect(component.querySelector('#contact-modal').className.includes('overlay--active')).toBe(
      true
    );
    expect(component.querySelector('#modal-contact')).toBeInTheDocument();
    fireEvent.click(component.querySelector('#contact-modal .modal__close'));
    expect(component.querySelector('#contact-modal')).toBeFalsy();
  });
});
