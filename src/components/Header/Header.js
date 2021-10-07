import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = (props) => {
  return <header className={`header ${props.className ? props.className : ''}`}>Header</header>;
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
