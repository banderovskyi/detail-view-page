import React, { useState as useStateMock } from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

let component;
let mockSet;
let initStatues = [false, false, false];

beforeEach(() => {
  mockSet = jest.fn();

  component = render(
    <Provider store={store}>
      <Header changeSubMenuStatuses={mockSet} subMenuStatuses={initStatues} />
    </Provider>
  ).container;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Header component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.header')).toBeInTheDocument();
  });
  it('should render all the header components', () => {
    expect(component.querySelector('.header__navigation')).toBeInTheDocument();
    expect(component.querySelector('.header__logo')).toBeInTheDocument();
    expect(component.querySelector('.header__links')).toBeInTheDocument();
    expect(component.querySelector('.header__contacts')).toBeInTheDocument();
    expect(component.querySelector('.header__search-button')).toBeInTheDocument();
  });
});
