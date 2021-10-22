import React from 'react';
import PropTypes from 'prop-types';

const SliderWrapper = (props) => {
  return (
    <div className="slider__wrapper-outer">
      <div
        className="slider__wrapper"
        style={{
          transform: `translateX(-${props.transformWidth}px)`,
          width: props.mainWrapperWidth,
        }}>
        {props.children}
      </div>
    </div>
  );
};

SliderWrapper.propTypes = {
  transformWidth: PropTypes.number,
  mainWrapperWidth: PropTypes.number,
};

export default SliderWrapper;
