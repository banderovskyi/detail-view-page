import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavigaionItem = ({ className, link, title, submenu, submenuClassName, clickHandler, index }) => {
  const isSubMenuPresent = submenu?.length > 0;

  const clickOnNode = (event) => {
    event.preventDefault();
    clickHandler(index);
  };

  return (
    <li className={`${className ? className : ''}`} onClick={clickOnNode}>
      <a href={link}>
        {title} {isSubMenuPresent && <FontAwesomeIcon icon={faChevronDown} size="xs" />}
      </a>
      {isSubMenuPresent && <SubMenu submenuItems={submenu} className={`${submenuClassName}`} />}
    </li>
  );
};

NavigaionItem.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  submenu: PropTypes.arrayOf(PropTypes.object),
  clickHandler: PropTypes.func,
  index: PropTypes.number,
};

export default NavigaionItem;
