import React from 'react';
import './HeaderLinks.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../../app/appSlice';
import { logoutFromLocalStorage } from '../../../helpers/helpers';

const HeaderLinks = (props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.app);
  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch(userLogOut());
    logoutFromLocalStorage();
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
              <a href="/login/">Log in</a>
            </li>
            <li className="header-links__item">
              <a href="/login/">Sign Up</a>
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
