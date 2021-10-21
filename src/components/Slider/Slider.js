/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SliderItem from './SliderItem';
import { debounce } from 'debounce';

const Slider = (props) => {
  const [images] = useState([
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=0', alt: 'Property image' },
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=1', alt: 'Property image' },
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=2', alt: 'Property image' },
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=3', alt: 'Property image' },
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=4', alt: 'Property image' },
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=5', alt: 'Property image' },
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=6', alt: 'Property image' },
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=7', alt: 'Property image' },
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=8', alt: 'Property image' },
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=9', alt: 'Property image' },
    { src: 'https://media.mlspin.com/photo.aspx?mls=72889712&n=10', alt: 'Property image' },
  ]);
  const [imagesLength] = useState(images.length);
  const [largeImageSize] = useState('&h=900&w=1200');
  const [smallImageSize] = useState('&h=480&w=640');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mainWrapperWidth, setMainWrapperWidth] = useState(0);
  const [imageNodeWidth, setImageNodeWidth] = useState(0);
  const [transformWidth, setTransformWidth] = useState(0);
  const $largeWrapper = useRef(null);

  const initSliderSizes = () => {
    const nodeWidth = $largeWrapper.current.clientWidth;
    setImageNodeWidth(nodeWidth);
    setMainWrapperWidth(nodeWidth * imagesLength);
    setTransformWidth(nodeWidth * activeImageIndex);
  };

  useEffect(() => {
    initSliderSizes();
    window.addEventListener('resize', initSliderSizes);

    return () => {
      window.removeEventListener('resize', initSliderSizes);
    };
  }, [activeImageIndex]);

  const nextClickHandler = () => {
    setActiveImageIndex((prevIndex) => {
      if (prevIndex >= imagesLength - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
    setTransformWidth((prevValue) => {
      const newTransformWidth = prevValue + imageNodeWidth;
      if (newTransformWidth >= mainWrapperWidth) {
        return 0;
      }
      return newTransformWidth;
    });
  };

  const prevClickHandler = () => {
    setActiveImageIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return imagesLength - 1;
      }
      return prevIndex - 1;
    });
    setTransformWidth((prevValue) => {
      const newTransformWidth = prevValue - imageNodeWidth;
      if (newTransformWidth < 0) {
        return mainWrapperWidth - imageNodeWidth;
      }
      return newTransformWidth;
    });
  };

  return (
    <div className={`slider ${props.className ? props.className : ''}`}>
      <div className="slider__buttons">
        <button onClick={prevClickHandler} className="slider__button slider__button-prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={nextClickHandler} className="slider__button slider__button-next">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="slider__main">
        <div className="slider__wrapper-outer" ref={$largeWrapper}>
          <div
            className="slider__wrapper"
            style={{
              transform: `translateX(-${transformWidth}px)`,
              width: mainWrapperWidth,
            }}>
            {images.map((image, index) => (
              <SliderItem
                src={image.src}
                imageSizeSrc={largeImageSize}
                width={imageNodeWidth}
                itemIndex={index}
                activeImageIndex={activeImageIndex}
                key={Math.random()}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="slider__thumbs">
        {images.map((image) => (
          <div className="slider__item">
            <img src={image.src + smallImageSize} alt={image.alt} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
};

export default Slider;
