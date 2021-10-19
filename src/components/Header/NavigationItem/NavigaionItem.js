/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from '../SubMenu/SubMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavigaionItem = ({
  className,
  link,
  title,
  submenu,
  submenuClassName,
  index,
  isSubmenuActive,
  clickHandler,
}) => {
  const isSubMenuPresent = submenu?.length > 0;

  if (isSubMenuPresent) {
    const clickOnItem = (e) => {
      e.preventDefault();
      clickHandler(index);
    };

    return (
      <li className={`${className ? className : ''}`} onClick={clickOnItem}>
        <a href={link}>
          {title}
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </a>
        <SubMenu
          submenuItems={submenu}
          className={`${submenuClassName} ${isSubmenuActive ? 'navigation__sub-menu--active' : ''}`}
        />
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
