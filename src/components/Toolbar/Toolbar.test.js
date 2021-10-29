import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../App';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

let component;

beforeEach(() => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  component = container;
});

describe('Toolbar component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.toolbar')).toBeInTheDocument();
  });
  it('should have the "Favorite" and "Contact" buttons', () => {
    expect(component.querySelectorAll('.toolbar__btn')[0].textContent).toBe('Favorite');
    expect(component.querySelectorAll('.toolbar__btn')[1].textContent).toBe('Contact');
  });
  it('button "Favorite" should open the modal', () => {
    fireEvent.click(component.querySelector('.toolbar__btn-favorite'));
    expect(component.querySelector('#favorite-modal').className.includes('overlay--active')).toBe(
      true
    );
  });
  it('button "Contact" should open the modal', () => {
    fireEvent.click(component.querySelector('.toolbar__btn-contact'));
    expect(component.querySelector('#contact-modal').className.includes('overlay--active')).toBe(
      true
    );
  });
});
