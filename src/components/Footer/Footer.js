import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = (props) => {
  return <footer className={`footer ${props.className ? props.className : ''}`}>Footer</footer>;
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
