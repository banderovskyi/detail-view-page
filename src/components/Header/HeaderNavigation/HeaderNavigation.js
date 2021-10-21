/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigaionItem from '../NavigationItem/NavigaionItem';
import './HeaderNavigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const HeaderNavigation = (props) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const openMobileMenuHandler = () => {
    setIsMobileMenuVisible(true);
  };

  const closeMobileMenuHandler = () => {
    setIsMobileMenuVisible(false);
  };

  const clickHandler = (index) => {
    props.changeSubMenuStatuses((prevState) => {
      let newStatuses;
      newStatuses = prevState.map((item, itemIndex) => {
        return itemIndex === index ? true : false;
      });
      if (prevState[index]) {
        newStatuses = prevState.map((item) => (item = false));
      }
      return newStatuses;
    });
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
              ${props.subMenuStatuses[index] ? 'navigation__item--active' : ''}`}
              isSubmenuActive={props.subMenuStatuses[index]}
              link={item.link}
              title={item.title}
              key={`${item.link}${item.title}`}
              submenu={item.submenu}
              submenuClassName={'navigation__sub-menu'}
              index={index}
              clickHandler={clickHandler}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

HeaderNavigation.propTypes = {
  className: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.object),
};

export default HeaderNavigation;
