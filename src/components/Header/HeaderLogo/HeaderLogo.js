import React from 'react';
import PropTypes from 'prop-types';

const HeaderLogo = (props) => {
  return (
    <a href={props.link} className={`logo ${props.className ? props.className : ''}`}>
      <img src={props.src} alt={props.alt} />
    </a>
  );
};

HeaderLogo.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default HeaderLogo;
