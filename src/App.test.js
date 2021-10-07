import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('App component', () => {
  it('should be rendered', () => {
    const { container } = render(<App />);

    expect(container.querySelector('#App')).toBeInTheDocument();
  });
});
