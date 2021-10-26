import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  return (
    <div className="modal">
      <header className="modal__header">Modal Header</header>
      <div className="modal__content">{props.children}</div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
