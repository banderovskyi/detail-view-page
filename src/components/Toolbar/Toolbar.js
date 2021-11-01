import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.scss';
import Button from '../UI/Button/Button';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { openLoginModal, openContactModal } from '../Modal/ModalSlice';

const Toolbar = (props) => {
  const dispatch = useDispatch();

  const favoriteClickHandler = () => {
    dispatch(openLoginModal());
  };

  const contactClickHandler = () => {
    dispatch(openContactModal());
  };

  return (
    <div className={`toolbar ${props.className ? props.className : ''}`}>
      <div className="toolbar__item">
        <Button
          onClick={favoriteClickHandler}
          className="toolbar__btn toolbar__btn-favorite"
          text="Favorite"
          icon={faHeart}
          isSecondary={true}
        />
      </div>
      <div className="toolbar__item">
        <Button
          onClick={contactClickHandler}
          className="toolbar__btn toolbar__btn-contact"
          text="Contact"
          icon={faEnvelope}
        />
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;
