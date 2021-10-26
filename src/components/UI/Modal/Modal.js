import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
  return (
    <div className="overlay">
      <div className="modal">
        <header className="modal__header">
          <button className="modal__close">
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
          <div className="modal__title">{props.title}</div>
          <div className="modal__sub-title">{props.subtitle}</div>
        </header>
        <div className="modal__content">{props.children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Modal;
