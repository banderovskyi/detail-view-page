import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigaionItem from './NavigaionItem';
import './HeaderNavigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderNavigaiton = (props) => {
  const navItemsNumber = props.navItems.length ? props.navItems.length : 0;
  const [subMenuStatuses, setSubMenuStatuses] = useState(new Array(navItemsNumber).fill(false));

  const openSubMenuHandler = (index) => {
    setSubMenuStatuses((previous) => {
      return previous.map((item, itemIndex) => {
        return itemIndex === index ? true : false;
      });
    });
    console.log(subMenuStatuses);
  };

  return (
    <div className={`navigation ${props.className ? props.className : ''}`}>
      <button className="navigation__mobile-menu-button sm-only">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className="navigation__wrapeer">
        <ul className="navigation__list">
          {props.navItems?.map((item, index) => (
            <NavigaionItem className={`navigation__item ${item.submenu ? 'navigation__item--dropdown' : ''} ${subMenuStatuses[index] ? 'navigation__item--active' : ''}`} link={item.link} title={item.title} key={item.key} submenu={item.submenu} submenuClassName={'navigation__sub-menu'} clickHandler={openSubMenuHandler} index={index} />
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
