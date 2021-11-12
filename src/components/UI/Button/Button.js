import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`btn ${props.isSecondary ? 'btn--secondary' : ''} ${
        props.className ? props.className : ''
      } `}>
      <FontAwesomeIcon icon={props.icon} />
      <span className="btn__text">{props.text}</span>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.object,
  isSecondary: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
