import React from 'react';
import { render } from '@testing-library/react';
import HeaderLinks from './HeaderLinks';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

let component;

const linksItems = [
  { title: 'My Favorites', link: '/listings/favorite/' },
  { title: 'Contact', link: '/contact-us/' },
];

beforeEach(() => {
  component = render(
    <Provider store={store}>
      <HeaderLinks links={linksItems} className="header-links-tested" />
    </Provider>
  ).container;
});

describe('Header links component', () => {
  it('should be rendered with proper class name', () => {
    expect(component.querySelector('.header-links-tested')).toBeInTheDocument();
  });
  it('shoud render list items with the log in and sing up links by default', () => {
    expect(component.querySelectorAll('.header-links-tested li a').length).toBe(
      linksItems.length + 2
    );
  });
});
