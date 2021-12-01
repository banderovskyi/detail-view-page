import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.scss';
import Button from '../UI/Button/Button';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginModal, openContactModal } from '../Modal/ModalSlice';
import { setIsFavorite, unsetIsFavorite } from '../../app/appSlice';
import { removeFavouriteFromLocalStorage, setFavouriteToLocalStorage } from '../../helpers/helpers';

const Toolbar = (props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.app);

  const favoriteClickHandler = () => {
    if (!userState.isUserLoggedIn) {
      dispatch(openLoginModal());
      return;
    }
    if (!userState.isFavoriteListing) {
      dispatch(setIsFavorite());
      setFavouriteToLocalStorage();
    } else {
      dispatch(unsetIsFavorite());
      removeFavouriteFromLocalStorage();
    }
  };

  const contactClickHandler = () => {
    dispatch(openContactModal());
  };

  return (
    <div className={`toolbar ${props.className ? props.className : ''}`}>
      {userState.isUserLoggedIn && (
        <div className="toolbar__user">
          Welcome <b>{userState.userEmail}</b>!
        </div>
      )}
      <div className="toolbar__grid">
        <div className="toolbar__item">
          <Button
            onClick={favoriteClickHandler}
            className={`toolbar__btn toolbar__btn-favorite ${
              userState.isFavoriteListing && userState.isUserLoggedIn
                ? 'toolbar__btn-favorite--active'
                : ''
            }`}
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
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;
