import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

let component;

beforeEach(() => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  component = container;
});

describe('More like this component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('#App')).toBeInTheDocument();
  });
  it('should render a header', () => {
    expect(component.querySelector('.header ')).toBeInTheDocument();
  });
  it('should render a slider', () => {
    expect(component.querySelector('.main .slider ')).toBeInTheDocument();
  });
  it('should render a sidebar', () => {
    expect(component.querySelector('.aside ')).toBeInTheDocument();
  });
  it('should render a more like this slider', () => {
    expect(component.querySelector('.more-like-this ')).toBeInTheDocument();
  });
  it('should render a listed by text', () => {
    expect(component.querySelector('.listed-by ')).toBeInTheDocument();
  });
  it('should render a footer', () => {
    expect(component.querySelector('.footer ')).toBeInTheDocument();
  });
});
