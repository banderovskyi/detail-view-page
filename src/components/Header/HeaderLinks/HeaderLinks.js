import React from 'react';
import './HeaderLinks.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../../app/appSlice';
import { openLoginModal, openSignupModal } from '../../Modal/ModalSlice';
import { logoutFromLocalStorage, removeFavouriteFromLocalStorage } from '../../../helpers/helpers';

const HeaderLinks = (props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.app);
  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch(userLogOut());
    logoutFromLocalStorage();
    removeFavouriteFromLocalStorage();
  };

  const logInHandler = (e) => {
    e.preventDefault();
    dispatch(openLoginModal());
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    dispatch(openSignupModal());
  };

  return (
    <div className={`header-links ${props.className ? props.className : ''}`}>
      <ul className="header-links__list">
        {props.links?.map((linkItem) => (
          <li className="header-links__item" key={`${linkItem.link}${linkItem.title}`}>
            <a href={linkItem.link}>{linkItem.title}</a>
          </li>
        ))}
        {userState.isUserLoggedIn ? (
          <li className="header-links__item">
            <a href="/logout/" onClick={logOutHandler}>
              Log Out
            </a>
          </li>
        ) : (
          <>
            <li className="header-links__item">
              <a href="/login/" onClick={logInHandler}>
                Log in
              </a>
            </li>
            <li className="header-links__item">
              <a href="/sign-up/" onClick={signUpHandler}>
                Sign Up
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

HeaderLinks.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default HeaderLinks;
