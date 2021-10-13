import React from 'react';
import './HeaderLinks.scss';
import PropTypes from 'prop-types';

const HeaderLinks = (props) => {
  return (
    <div className={`header-links ${props.className ? props.className : ''}`}>
      <ul className="header-links__list">
        {props.links?.map((linkItem) => (
          <li className="header-links__item" key={`${linkItem.link}${linkItem.title}`}>
            <a href={linkItem.link}>{linkItem.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

HeaderLinks.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default HeaderLinks;
