/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from '../SubMenu/SubMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { openNavItem } from '../HeaderNavigation/HeaderNavigationSlice';

const NavigaionItem = ({ className, link, title, submenu, submenuClassName, index, isSubmenuActive }) => {
  const isSubMenuPresent = submenu?.length > 0;
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(openNavItem(index));
  };

  if (isSubMenuPresent) {
    return (
      <li className={`${className ? className : ''}`} onClick={clickHandler}>
        <a href={link}>
          {title}
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </a>
        <SubMenu submenuItems={submenu} className={`${submenuClassName} ${isSubmenuActive ? 'navigation__sub-menu--active' : ''}`} />
      </li>
    );
  } else {
    return (
      <li className={`${className ? className : ''}`}>
        <a href={link}>{title}</a>
      </li>
    );
  }
};

NavigaionItem.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  submenu: PropTypes.arrayOf(PropTypes.object),
  submenuClassName: PropTypes.string,
  index: PropTypes.number,
  isSubmenuActive: PropTypes.bool,
};

export default NavigaionItem;
