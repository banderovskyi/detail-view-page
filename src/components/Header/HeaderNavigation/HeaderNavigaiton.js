/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import NavigaionItem from '../NavigationItem/NavigaionItem';
import './HeaderNavigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { selectNavSubMenusStatuses } from './HeaderNavigationSlice';

const HeaderNavigaiton = (props) => {
  const navSubMenusStatuses = useSelector(selectNavSubMenusStatuses);

  return (
    <div className={`navigation ${props.className ? props.className : ''}`}>
      <button className="navigation__mobile-menu-button sm-only">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className="navigation__wrapeer">
        <ul className="navigation__list">
          {props.navItems?.map((item, index) => (
            <NavigaionItem
              className={`navigation__item ${
                item.submenu ? 'navigation__item--dropdown' : ''
              } ${
                navSubMenusStatuses[index] ? 'navigation__item--active' : ''
              }`}
              link={item.link}
              title={item.title}
              key={item.key}
              submenu={item.submenu}
              submenuClassName={'navigation__sub-menu'}
              index={index}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

HeaderNavigaiton.propTypes = {
  className: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.object),
};

export default HeaderNavigaiton;
