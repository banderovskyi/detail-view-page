import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { closeModal } from './ModalSlice';
import { disableScroll, enableScroll } from '../../helpers/helpers';

const Modal = (props) => {
  const dispatch = useDispatch();

  const closeModalHandler = (event) => {
    dispatch(closeModal());
  };

  const closeModalOnOverlay = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  // Disabling scroll on modal open
  useEffect(() => {
    if (props.isActive) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [props.isActive]);

  return (
    <div
      className={`overlay ${props.isActive ? 'overlay--active' : ''}`}
      onClick={closeModalOnOverlay}
      id={props.id}>
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
        {props.children && <div className="modal__content">{props.children}</div>}
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Modal;
