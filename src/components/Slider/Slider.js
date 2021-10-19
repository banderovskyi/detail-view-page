import React from 'react';
import PropTypes from 'prop-types';

const Slider = (props) => {
  return <div className={`slider ${props.className ? props.className : ''}`}>Slider</div>;
};

Slider.propTypes = {
  className: PropTypes.string,
};

export default Slider;
