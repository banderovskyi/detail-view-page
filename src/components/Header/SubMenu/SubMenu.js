import React from 'react';
import './SubMenu.scss';
import PropTypes from 'prop-types';
import NavigaionItem from '../NavigationItem/NavigaionItem';

const SubMenu = ({ className, submenuItems }) => {
  return (
    <ul className={`submenu ${className ? className : ''}`}>
      {submenuItems?.map((item) => (
        <NavigaionItem
          className={'submenu__item'}
          link={item.link}
          title={item.title}
          key={`${item.link}${item.title}`}
        />
      ))}
    </ul>
  );
};

SubMenu.propTypes = {
  className: PropTypes.string,
  submenuItems: PropTypes.arrayOf(PropTypes.object),
};

export default SubMenu;
