import React from 'react';
import './DescriptionCard.scss';
import PropTypes from 'prop-types';

const DescriptionCard = ({ className, title, description }) => {
  return (
    <div className={`description-card ${className ? className : ''}`}>
      <div className="description-card__title">{title}</div>
      <div className="description-card__text">{description}</div>
    </div>
  );
};

DescriptionCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DescriptionCard;
