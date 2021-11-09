import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactItem = (props) => {
  return (
    <div className={`contact-item ${props.className ? props.className : ''}`}>
      {props.description && <div className="contact-item__description">{props.description}:</div>}
      {props.icon && (
        <div className="contact-item__icon">
          <FontAwesomeIcon icon={props.icon} />
        </div>
      )}
      {props.contact && (
        <div className="contact-item__value">
          <a href={props.href}>{props.contact}</a>
        </div>
      )}
    </div>
  );
};

ContactItem.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.object,
  contact: PropTypes.string,
  href: PropTypes.string,
};

export default ContactItem;
