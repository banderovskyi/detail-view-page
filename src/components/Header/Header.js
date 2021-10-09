/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import HeaderNavigaiton from './HeaderNavigation/HeaderNavigaiton';
import { useDispatch } from 'react-redux';
import { initSubMenuStatues } from './HeaderNavigation/HeaderNavigationSlice';

const Header = (props) => {
  const [navItems] = useState([
    { link: '/', title: 'Home', key: Math.random() },
    {
      link: '#',
      title: 'Sales',
      key: Math.random(),
      submenu: [
        {
          link: '/sellers/link/',
          title: 'Western Suburbs',
          key: Math.random(),
        },
        { link: '/sellers/link/', title: 'North Shore', key: Math.random() },
        { link: '/sellers/link/', title: 'South Shore', key: Math.random() },
        {
          link: '/sellers/link/',
          title: 'Cape Cod & Islands',
          key: Math.random(),
        },
        {
          link: '/sellers/link/',
          title: 'Off Market Listings',
          key: Math.random(),
        },
      ],
    },
    {
      link: '#',
      title: 'Rentals',
      key: Math.random(),
      submenu: [
        {
          link: '/sellers/link/',
          title: 'Western Suburbs',
          key: Math.random(),
        },
        { link: '/sellers/link/', title: 'North Shore', key: Math.random() },
        { link: '/sellers/link/', title: 'South Shore', key: Math.random() },
        {
          link: '/sellers/link/',
          title: 'Cape Cod & Islands',
          key: Math.random(),
        },
        {
          link: '/sellers/link/',
          title: 'Off Market Listings',
          key: Math.random(),
        },
      ],
    },
    { link: '/', title: 'Quick search', key: Math.random() },
    { link: '/', title: 'Neighborhoods', key: Math.random() },
    {
      link: '/',
      title: 'About',
      key: Math.random(),
      submenu: [
        { link: '/sellers/link/', title: 'Team', key: Math.random() },
        { link: '/sellers/link/', title: 'Contact', key: Math.random() },
      ],
    },
  ]);
  const dispatch = useDispatch();
  const navItemsNumber = navItems.length ? navItems.length : 0;
  const subMenuStatuses = new Array(navItemsNumber).fill(false);

  useEffect(() => {
    dispatch(initSubMenuStatues(subMenuStatuses));
  }, []);

  return (
    <header className={`header ${props.className ? props.className : ''}`}>
      <HeaderNavigaiton className="header__navigaiton" navItems={navItems} />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
