import React from 'react';
import { render } from '@testing-library/react';
import SubMenu from './SubMenu';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

let component;

const submenuItems = [
  { link: '/other-page/', title: 'North Shore' },
  { link: '/sellers/second-link/', title: 'South Shore' },
];

beforeEach(() => {
  component = render(<SubMenu className={'tested-sub-menu'} />);
});

describe('SubMenu component', () => {
  it('should be rendered', () => {
    expect(component.container.querySelector('.submenu')).toBeInTheDocument();
  });
  it('should get props className', () => {
    expect(component.container.querySelector('.tested-sub-menu')).toBeInTheDocument();
  });
  it('should render the items', () => {
    component = render(
      <Provider store={store}>
        <SubMenu submenuItems={submenuItems} />
      </Provider>
    );
    expect(component.container.querySelectorAll('li').length).toBe(submenuItems.length);
  });
  it('should render the item which are leading to other pages', () => {
    component = render(
      <Provider store={store}>
        <SubMenu submenuItems={submenuItems} />
      </Provider>
    );
    const menuLink = component.container.querySelector('li a');
    expect(menuLink.getAttribute('href')).toBe('/other-page/');
  });
});
