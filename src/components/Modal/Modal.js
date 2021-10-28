import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { closeModal } from './ModalSlice';
import { enableScroll } from '../../helpers/helpers';

const Modal = (props) => {
  const dispatch = useDispatch();

  const closeModalHandler = (event) => {
    dispatch(closeModal());
    enableScroll();
  };

  const closeModalOnOverlay = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
      enableScroll();
    }
  };

  return (
    <div
      className={`overlay ${props.isActive ? 'overlay--active' : ''}`}
      onClick={closeModalOnOverlay}>
      <div
        className={`modal
        ${props.children ? 'modal--with-content' : ''}
        `}>
        <header className="modal__header">
          <button onClick={closeModalHandler} className="modal__close">
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
          <div className="modal__title">{props.title}</div>
          {props.subtitle && <div className="modal__sub-title">{props.subtitle}</div>}
        </header>
        <div className="modal__content">{props.children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Modal;
