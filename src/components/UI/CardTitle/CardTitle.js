import React from 'react';
import './CardTitle.scss';
import PropTypes from 'prop-types';

const CardTitle = ({ className, title, onClick }) => {
  return <div className={`card-title ${className ? className : ''}`}>{title}</div>;
};

CardTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default CardTitle;
