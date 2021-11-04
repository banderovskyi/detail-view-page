import React from 'react';
import PropTypes from 'prop-types';
import './IconListItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconListItem = ({ className, icon, title, value }) => {
  return (
    <li className={`icon-list-item ${className ? className : ''}`}>
      {icon && (
        <div className="icon-list-item__icon">
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
      )}
      {title && <div className="icon-list-item__title">{title}</div>}
      {value && <div className="icon-list-item__value">{value}</div>}
    </li>
  );
};

IconListItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.object,
};

export default IconListItem;
