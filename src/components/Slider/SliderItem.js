import React from 'react';
import PropTypes from 'prop-types';

const SliderItem = (props) => {
  return (
    <div
      className={`slider__item ${
        props.itemIndex === props.activeImageIndex ? 'slider__item--active' : ''
      }`}
      onClick={() => props.clickHandler && props.clickHandler(props.itemIndex)}
      style={{ width: props.width }}>
      <img src={`${props.src}${props.imageSize}.jpeg`} alt={props.alt} />
    </div>
  );
};

SliderItem.propTypes = {
  itemIndex: PropTypes.number,
  activeImageIndex: PropTypes.number,
  src: PropTypes.string,
  imageSize: PropTypes.string,
  width: PropTypes.number,
};

export default SliderItem;
