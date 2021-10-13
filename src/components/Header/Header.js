/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import HeaderNavigaiton from './HeaderNavigation/HeaderNavigaiton';
import { useDispatch } from 'react-redux';
import { initSubMenuStatues } from './HeaderNavigation/HeaderNavigationSlice';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import HeaderContacts from './HeaderContacts/HeaderContacts';
import SearchButton from './SearchButton/SearchButton';

const Header = (props) => {
  const [navItems] = useState([
    {
      link: '#',
      title: 'Sales',

      submenu: [
        {
          link: '/sellers/link/',
          title: 'Western Suburbs',
        },
        { link: '/sellers/link/', title: 'North Shore' },
        { link: '/sellers/link/', title: 'South Shore' },
        {
          link: '/sellers/link/',
          title: 'Cape Cod & Islands',
        },
        {
          link: '/sellers/link/',
          title: 'Off Market Listings',
        },
      ],
    },
    {
      link: '#',
      title: 'Rentals',

      submenu: [
        {
          link: '/sellers/link/',
          title: 'Western Suburbs',
        },
        { link: '/sellers/link/', title: 'North Shore' },
        { link: '/sellers/link/', title: 'South Shore' },
        {
          link: '/sellers/link/',
          title: 'Cape Cod & Islands',
        },
        {
          link: '/sellers/link/',
          title: 'Off Market Listings',
        },
      ],
    },
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
  ]);
  const [logoInfo] = useState({
    link: '/',
    src: 'https://s3.amazonaws.com/files.usmre.com/8844/usm-logo-blue.svg',
    alt: 'Logo',
  });
  const [headerLinks] = useState([
    { title: 'My Favorites', link: '/listings/favorite/' },
    { title: 'Contact', link: '/contact-us/' },
    { title: 'Log In', link: '#' },
    { title: 'Sign Up', link: '#' },
  ]);
  const [contacts] = useState([{ title: '132-132-1324', link: 'tel:1321321324' }]);
  const dispatch = useDispatch();
  const navItemsNumber = navItems.length ? navItems.length : 0;
  const subMenuStatuses = new Array(navItemsNumber).fill(false);

  useEffect(() => {
    dispatch(initSubMenuStatues(subMenuStatuses));
  }, []);

  return (
    <header className={`header ${props.className ? props.className : ''}`}>
      <div className="container">
        <div className="header__part header__part_left">
          <HeaderNavigaiton className="header__navigaiton" navItems={navItems} />
        </div>
        <HeaderLogo className="header__logo" {...logoInfo} />
        <div className="header__part header__part_right">
          <HeaderLinks className="header__links" links={headerLinks} />
          <HeaderContacts className="header__contacts" contacts={contacts} />
          <SearchButton className="header__search-button" link="/listings/" title="Search" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
