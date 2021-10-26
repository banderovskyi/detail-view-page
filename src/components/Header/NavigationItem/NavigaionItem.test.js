import React from 'react';
import { render } from '@testing-library/react';
import NavigaionItem from './NavigaionItem';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

let component;

beforeEach(() => {
  component = render(
    <Provider store={store}>
      <NavigaionItem className={'tested-nav-item'} link="nav-item-test" title="Nav item test" />
    </Provider>
  );
});

const submenuItems = [
  { link: '/sellers/link/', title: 'Team' },
  { link: '/sellers/link/', title: 'Contact' },
];

describe('NavigaionItem component', () => {
  it('should be rendered', () => {
    expect(component.container.querySelector('.tested-nav-item')).toBeInTheDocument();
  });
  it('should render proper link and title', () => {
    const navLink = component.container.querySelector('a');
    expect(navLink.textContent).toBe('Nav item test');
    expect(navLink.getAttribute('href')).toBe('nav-item-test');
  });
  it('should be without submenu by default', () => {
    const submenuList = component.container.querySelector('ul');
    expect(submenuList).toBeFalsy();
  });
  it('should render submenu', () => {
    component = render(
      <Provider store={store}>
        <NavigaionItem
          className={'tested-nav-item'}
          submenuClassName={'navigation__sub-menu'}
          submenu={submenuItems}
        />
      </Provider>
    );
    expect(component.container.querySelector('ul.navigation__sub-menu')).toBeInTheDocument();
  });
});
