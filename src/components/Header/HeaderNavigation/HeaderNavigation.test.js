import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HeaderNavigation from './HeaderNavigation';

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

let mockSetMobMenu;

beforeEach(() => {
  mockSetMobMenu = jest.fn();

  component = render(
    <HeaderNavigation
      subMenuStatuses={[false, false, false]}
      className="header-navigation-tested"
      navItems={navItems}
      isMobileMenuVisible={false}
      changeMobileMenuVisability={mockSetMobMenu}
    />
  ).container;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Header navigation component', () => {
  it('should be rendered with proper class name', () => {
    expect(component.querySelector('.header-navigation-tested')).toBeInTheDocument();
  });
  it('should render navigation items', () => {
    expect(
      component.querySelectorAll('.header-navigation-tested .navigation__list >  .navigation__item')
        .length
    ).toBe(navItems.length);
  });
  it('should render navigation item with submenu', () => {
    expect(
      component.querySelector('.header-navigation-tested .navigation__list .submenu')
    ).toBeInTheDocument();
  });
  it('should be able to be toggleable on mobile', () => {
    const mobileMenuOpen = component.querySelector(
      '.header-navigation-tested .navigation__mobile-menu-button_open'
    );
    const mobileMenuClose = component.querySelector(
      '.header-navigation-tested .navigation__mobile-menu-button_close'
    );
    fireEvent.click(mobileMenuOpen);
    console.log(component.querySelector('.header-navigation-tested').className);
    expect(
      component.querySelector('.header-navigation-tested').className.includes('navigation--active')
    ).toBe(true);
    fireEvent.click(mobileMenuClose);
    expect(
      component.querySelector('.header-navigation-tested').className.includes('navigation--active')
    ).toBe(false);
  });
});
