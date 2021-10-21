import React from 'react';
import PropTypes from 'prop-types';

const SliderItem = (props) => {
  return (
    <div
      className={`slider__item ${
        props.itemIndex === props.activeImageIndex ? 'slider__item--active' : ''
      }`}>
      <img src={props.src + props.imageSizeSrc} alt={props.alt} style={{ width: props.width }} />
    </div>
  );
};

SliderItem.propTypes = {
  itemIndex: PropTypes.number,
  activeImageIndex: PropTypes.number,
  src: PropTypes.string,
  imageSizeSrc: PropTypes.string,
  width: PropTypes.number,
};

export default SliderItem;
