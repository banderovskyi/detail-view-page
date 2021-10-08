import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import HeaderNavigaiton from './HeaderNavigaiton';

const Header = (props) => {
  const [state, setState] = useState([
    { link: '/', title: 'Home', key: Math.random() },
    {
      link: '#',
      title: 'Sales',
      key: Math.random(),
      submenu: [
        { link: '/sellers/link/', title: 'Western Suburbs', key: Math.random() },
        { link: '/sellers/link/', title: 'North Shore', key: Math.random() },
        { link: '/sellers/link/', title: 'South Shore', key: Math.random() },
        { link: '/sellers/link/', title: 'Cape Cod & Islands', key: Math.random() },
        { link: '/sellers/link/', title: 'Off Market Listings', key: Math.random() },
      ],
    },
    {
      link: '#',
      title: 'Rentals',
      key: Math.random(),
      submenu: [
        { link: '/sellers/link/', title: 'Western Suburbs', key: Math.random() },
        { link: '/sellers/link/', title: 'North Shore', key: Math.random() },
        { link: '/sellers/link/', title: 'South Shore', key: Math.random() },
        { link: '/sellers/link/', title: 'Cape Cod & Islands', key: Math.random() },
        { link: '/sellers/link/', title: 'Off Market Listings', key: Math.random() },
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

  return (
    <header className={`header ${props.className ? props.className : ''}`}>
      <HeaderNavigaiton className="header__navigaiton" navItems={state} />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
