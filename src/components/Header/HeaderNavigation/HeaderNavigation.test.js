import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import HeaderNavigaiton from './HeaderNavigaiton';

let component;

const navItems = [
  { link: '/', title: 'Quick search' },
  { link: '/', title: 'Neighborhoods' },
  {
    link: '/',
    title: 'About',
    submenu: [
      { link: '/sellers/link/', title: 'Team' },
      { link: '/sellers/link/', title: 'Contact' },
    ],
  },
];

beforeEach(() => {
  component = render(
    <Provider store={store}>
      <HeaderNavigaiton className="header-navigaiton-tested" navItems={navItems} />
    </Provider>
  ).container;
});

describe('Header navigation component', () => {
  it('should be rendered with proper class name', () => {
    expect(component.querySelector('.header-navigaiton-tested')).toBeInTheDocument();
  });
  it('should render navigation items', () => {
    expect(
      component.querySelectorAll('.header-navigaiton-tested .navigation__list >  .navigation__item')
        .length
    ).toBe(navItems.length);
  });
  it('should render navigation item with submenu', () => {
    expect(
      component.querySelector('.header-navigaiton-tested .navigation__list .submenu')
    ).toBeInTheDocument();
  });
  it('should be able to be toggleable on mobile', () => {
    const mobileMenuOpen = component.querySelector(
      '.header-navigaiton-tested .navigation__mobile-menu-button_open'
    );
    const mobileMenuClose = component.querySelector(
      '.header-navigaiton-tested .navigation__mobile-menu-button_close'
    );
    fireEvent.click(mobileMenuOpen);
    expect(
      component.querySelector('.header-navigaiton-tested').className.includes('navigation--active')
    ).toBe(true);
    fireEvent.click(mobileMenuClose);
    expect(
      component.querySelector('.header-navigaiton-tested').className.includes('navigation--active')
    ).toBe(false);
  });
});
