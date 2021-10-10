import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('Header component', () => {
  it('should be rendered', () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(container.querySelector('.header')).toBeInTheDocument();
  });
});
