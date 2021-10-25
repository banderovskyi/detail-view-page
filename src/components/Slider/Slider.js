/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faSearchPlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import SliderItem from './SliderItem';
import SliderWrapper from './SliderWrapper';

const Slider = (props) => {
  const [images] = useState([
    { src: '/images/image-1', alt: 'Property image' },
    { src: '/images/image-2', alt: 'Property image' },
    { src: '/images/image-3', alt: 'Property image' },
    { src: '/images/image-4', alt: 'Property image' },
    { src: '/images/image-5', alt: 'Property image' },
    { src: '/images/image-6', alt: 'Property image' },
    { src: '/images/image-7', alt: 'Property image' },
    { src: '/images/image-8', alt: 'Property image' },
    { src: '/images/image-9', alt: 'Property image' },
    { src: '/images/image-10', alt: 'Property image' },
    { src: '/images/image-11', alt: 'Property image' },
  ]);
  const mobileBreakpoint = 768;

  const thumbsOnDesktop = 7;
  const thumbsOnMobile = 3;
  const thumbsOnFullScreen = 10;
  const [thumbsCount, setThumbsCount] = useState(thumbsOnDesktop);

  const [imagesLength] = useState(images.length);

  const [largeImageSize] = useState('-h=900w=1200');
  const [smallImageSize] = useState('-h=480w=640');

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mainWrapperWidth, setMainWrapperWidth] = useState(0);
  const [imageNodeWidth, setImageNodeWidth] = useState(0);
  const [transformWidth, setTransformWidth] = useState(0);

  const [isFullScreenButtonVisible, setIsFullScreenButtonVisible] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const $largeWrapper = useRef(null);

  const initSliderSizes = () => {
    const nodeWidth = $largeWrapper.current.clientWidth;
    setImageNodeWidth(nodeWidth);
    setMainWrapperWidth(nodeWidth * imagesLength);
    setTransformWidth(nodeWidth * activeImageIndex);
    if (window.innerWidth < mobileBreakpoint) {
      setThumbsCount(thumbsOnMobile);
    } else if (!isFullScreen) {
      setThumbsCount(thumbsOnDesktop);
    }
  };

  useEffect(() => {
    initSliderSizes();
    window.addEventListener('resize', () => {
      initSliderSizes();
    });
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

  const clickOnThumbHandler = (index) => {
    setActiveImageIndex(index);
  };

  const enableFullScreen = () => {
    setIsFullScreen(true);
    setThumbsCount(thumbsOnFullScreen);
  };

  const disableFullScreen = () => {
    setIsFullScreen(false);
    setThumbsCount(thumbsOnDesktop);
  };

  useEffect(() => {
    initSliderSizes();
  }, [isFullScreen]);

  return (
    <div
      className={`slider ${isFullScreen ? 'slider--full-screen' : ''} ${
        props.className ? props.className : ''
      } `}
      ref={$largeWrapper}
      onMouseEnter={() => setIsFullScreenButtonVisible(true)}
      onMouseLeave={() => setIsFullScreenButtonVisible(false)}>
      <div className="slider__main">
        <div className="slider__buttons">
          <button onClick={prevClickHandler} className="slider__button slider__button--prev">
            <FontAwesomeIcon icon={faChevronLeft} size="4x" />
          </button>
          <button onClick={nextClickHandler} className="slider__button slider__button--next">
            <FontAwesomeIcon icon={faChevronRight} size="4x" />
          </button>
          {!isFullScreen && isFullScreenButtonVisible && (
            <button
              onClick={enableFullScreen}
              className="slider__button slider__button--full-screen">
              <FontAwesomeIcon icon={faSearchPlus} size="2x" />
            </button>
          )}
          {isFullScreen && (
            <button
              onClick={disableFullScreen}
              className="slider__button slider__button--disable-full-screen">
              <FontAwesomeIcon icon={faTimes} size="3x" />
            </button>
          )}
        </div>
        <SliderWrapper mainWrapperWidth={mainWrapperWidth} transformWidth={transformWidth} onS>
          {images.map((image, index) => (
            <SliderItem
              src={image.src}
              imageSize={largeImageSize}
              width={imageNodeWidth}
              itemIndex={index}
              activeImageIndex={activeImageIndex}
              key={Math.random()}
            />
          ))}
        </SliderWrapper>
      </div>
      <div className="slider__thumbs">
        <SliderWrapper
          mainWrapperWidth={mainWrapperWidth / thumbsCount}
          transformWidth={
            activeImageIndex < imagesLength - thumbsCount
              ? transformWidth / thumbsCount
              : mainWrapperWidth / thumbsCount - imageNodeWidth
          }>
          {images.map((image, index) => (
            <SliderItem
              src={image.src}
              imageSize={smallImageSize}
              width={imageNodeWidth / thumbsCount}
              itemIndex={index}
              activeImageIndex={activeImageIndex}
              key={Math.random()}
              clickHandler={clickOnThumbHandler}
            />
          ))}
        </SliderWrapper>
      </div>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
};

export default Slider;
