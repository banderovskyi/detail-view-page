import React from 'react';
import './HeaderContacts.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const HeaderContacts = (props) => {
  return (
    <div className={`header-contacts ${props.className ? props.className : ''}`}>
      <ul className="header-contacts__list">
        {props.contacts?.map((contact) => (
          <li className="header-contacts__item" key={`${contact.link}${contact.title}`}>
            <a href={contact.link}>
              {contact.link.includes('tel:') && <FontAwesomeIcon icon={faPhone} />}
              {contact.link.includes('mailto:') && <FontAwesomeIcon icon={faEnvelope} />}
              <span>{contact.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

HeaderContacts.propTypes = {
  className: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default HeaderContacts;
