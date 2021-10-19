import React, { useState } from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

let component;
const [myState, setMyState] = React.useState();

beforeEach(() => {
  const myInitialState = [false, false, false];

  React.useState = jest.fn().mockReturnValue([myInitialState, {}]);

  component = render(
    <Provider store={store}>
      <Header subMenuStatuses={myState} changeSubMenuStatuses={setMyState} />
    </Provider>
  ).container;
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
