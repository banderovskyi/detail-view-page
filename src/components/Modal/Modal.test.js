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
  it('should be rendered', () => {
    expect(component.querySelector('.overlay .modal')).toBeInTheDocument();
  });
  it('should render all parts', () => {
    expect(component.querySelector('.modal .modal__header')).toBeInTheDocument();
    expect(component.querySelector('.modal .modal__content')).toBeInTheDocument();
    expect(component.querySelector('.modal .modal__close')).toBeInTheDocument();
  });
  it('button "Favorite" should open the modal and than button should be closed', () => {
    fireEvent.click(component.querySelector('.toolbar__btn-favorite'));
    expect(component.querySelector('#favorite-modal').className.includes('overlay--active')).toBe(
      true
    );
    fireEvent.click(component.querySelector('#favorite-modal .modal__close'));
    expect(component.querySelector('#favorite-modal').className.includes('overlay--active')).toBe(
      false
    );
  });
  it('"Contact" modal shouldnt render a subtitle', () => {
    expect(component.querySelector('#contact-modal .modal__sub-title')).toBeFalsy();
  });
  it('shouldt render content and subtitle without props', () => {
    const testModal = render(
      <Provider store={store}>
        <Modal
          id="test-modal"
          title="Log in or create an account to save this listing to your favorites"
        />
      </Provider>
    ).container;
    expect(testModal.querySelector('.modal__sub-title')).toBeFalsy();
    expect(testModal.querySelector('.modal__content')).toBeFalsy();
  });
});
