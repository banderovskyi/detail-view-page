import React from 'react';
import { render } from '@testing-library/react';
import HeaderLinks from './HeaderLinks';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

let component;

const linksItems = [
  { title: 'My Favorites', link: '/listings/favorite/' },
  { title: 'Contact', link: '/contact-us/' },
  { title: 'Log In', link: '#' },
  { title: 'Sign Up', link: '#' },
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
  // it('shoud render list items with links', () => {
  //   expect(component.querySelectorAll('.header-links-tested li a').length).toBe(linksItems.length);
  // });
  // it('shoud properly render title and href', () => {
  //   component.querySelectorAll('.header-links-tested li a').forEach((item, index) => {
  //     expect(item.textContent).toEqual(linksItems[index].title);
  //     expect(item.getAttribute('href')).toEqual(linksItems[index].link);
  //   });
  // });
});
