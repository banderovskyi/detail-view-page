import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavigaionItem = ({
  className,
  link,
  title,
  submenu,
  submenuClassName,
  clickHandler,
  index,
  navItemRef,
}) => {
  const isSubMenuPresent = submenu?.length > 0;

  const clickOnNode = (event) => {
    event.preventDefault();
    if (!clickHandler) {
      return;
    }
    clickHandler(index);
  };

  if (isSubMenuPresent) {
    return (
      <li
        className={`${className ? className : ''}`}
        onClick={clickOnNode}
        ref={navItemRef}
      >
        <a href={link}>
          {title}
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </a>
        <SubMenu submenuItems={submenu} className={`${submenuClassName}`} />
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
  clickHandler: PropTypes.func,
  index: PropTypes.number,
};

export default NavigaionItem;
