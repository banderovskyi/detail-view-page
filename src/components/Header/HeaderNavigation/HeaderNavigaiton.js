/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import NavigaionItem from '../NavigationItem/NavigaionItem';
import './HeaderNavigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  closeMobileMenu,
  openMobileMenu,
  selectMobileMenuVisabilty,
  selectNavSubMenusStatuses,
} from './HeaderNavigationSlice';

const HeaderNavigaiton = (props) => {
  const navSubMenusStatuses = useSelector(selectNavSubMenusStatuses);
  const isMobileMenuVisible = useSelector(selectMobileMenuVisabilty);
  const dispatch = useDispatch();

  const openMobileMenuHandler = () => {
    dispatch(openMobileMenu());
  };

  const closeMobileMenuHandler = () => {
    dispatch(closeMobileMenu());
  };

  return (
    <div
      className={`navigation ${props.className ? props.className : ''} ${
        isMobileMenuVisible ? 'navigation--active' : ''
      }`}>
      <button
        className="navigation__mobile-menu-button navigation__mobile-menu-button_open"
        onClick={openMobileMenuHandler}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
      <nav className="navigation__wrapper">
        <button
          className="navigation__mobile-menu-button navigation__mobile-menu-button_close"
          onClick={closeMobileMenuHandler}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <ul className="navigation__list">
          {props.navItems?.map((item, index) => (
            <NavigaionItem
              className={`navigation__item
              ${item.submenu ? 'navigation__item--dropdown' : ''}
              ${navSubMenusStatuses[index] ? 'navigation__item--active' : ''}`}
              isSubmenuActive={navSubMenusStatuses[index]}
              link={item.link}
              title={item.title}
              key={`${item.link}${item.title}`}
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
