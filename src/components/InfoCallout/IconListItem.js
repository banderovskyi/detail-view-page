import React from 'react';
import PropTypes from 'prop-types';
import './IconListItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconListItem = (props) => {
  return (
    <li className="icon-list__item icon-list-item">
      <div className="icon-list-item__icon">
        <FontAwesomeIcon icon={props.icon} size="2x" />
      </div>
      <div className="icon-list-item__title">{props.title}</div>
      <div className="icon-list-item__value">{props.value}</div>
    </li>
  );
};

IconListItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.object,
};

export default IconListItem;
