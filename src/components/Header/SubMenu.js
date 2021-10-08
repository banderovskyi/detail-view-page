import React from 'react';
import PropTypes from 'prop-types';
import NavigaionItem from './NavigaionItem';

const SubMenu = ({ className, submenuItems }) => {
  return (
    <ul className={`submenu ${className ? className : ''}`}>
      {submenuItems?.map((item) => (
        <NavigaionItem className={'submenu__item'} link={item.link} title={item.title} key={item.key} />
      ))}
    </ul>
  );
};

SubMenu.propTypes = {
  className: PropTypes.string,
  submenuItems: PropTypes.arrayOf(PropTypes.object),
};

export default SubMenu;
