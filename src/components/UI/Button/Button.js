import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
  return (
    <button
      disabled={props.isDisabled}
      type={props.type}
      onClick={props.onClick}
      className={`btn ${props.isSecondary ? 'btn--secondary' : ''} ${
        props.className ? props.className : ''
      } `}>
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      <span className="btn__text">{props.text}</span>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.object,
  type: PropTypes.string,
  isSecondary: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export default Button;
