/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './CardsSlider.scss';
import ListingCard from '../UI/ListingCard/ListingCard';
import SliderWrapper from '../Slider/SliderWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CardsSlider = (props) => {
  const laptopBreakpoint = 1440;
  const tabletBreakpoint = 922;
  const mobileBreakpoint = 768;

  const cardsCountNumber = {
    desktop: 4,
    laptop: 3,
    tablet: 2,
    mobile: 1,
  };
  const [cardsCount, setCardsCount] = useState(cardsCountNumber.desktop);

  const [itemsLength] = useState(props.items.length);

  const [windowWidth, setwindowWidth] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [sliderWrapperWidth, setSliderWrapperWidth] = useState(0);
  const [itemNodeWidth, setItemNodeWidth] = useState(0);

  const $sliderWrapper = useRef(null);

  const initSliderSizes = () => {
    setwindowWidth(window.innerWidth);
    if (windowWidth < mobileBreakpoint) {
      setCardsCount(cardsCountNumber.mobile);
    } else if (mobileBreakpoint <= windowWidth && windowWidth < tabletBreakpoint) {
      setCardsCount(cardsCountNumber.tablet);
    } else if (tabletBreakpoint < windowWidth && windowWidth < laptopBreakpoint) {
      setCardsCount(cardsCountNumber.laptop);
    } else {
      setCardsCount(cardsCountNumber.desktop);
    }
    const wrapperWidth = $sliderWrapper.current.clientWidth;
    setItemNodeWidth(wrapperWidth / cardsCount);
    setSliderWrapperWidth((wrapperWidth / cardsCount) * itemsLength);
  };

  useEffect(() => {
    initSliderSizes();
    window.addEventListener('resize', () => {
      initSliderSizes();
    });
    return () => {
      window.removeEventListener('resize', initSliderSizes);
    };
  }, [cardsCount, windowWidth]);

  const nextClickHandler = () => {
    setActiveCardIndex((prevIndex) => {
      if (!(activeCardIndex < itemsLength - cardsCount)) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevClickHandler = () => {
    setActiveCardIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return itemsLength - cardsCount;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className={`cards-slider ${props.className ? props.className : ''}`} ref={$sliderWrapper}>
      <div className="cards-slider__buttons">
        <button
          onClick={prevClickHandler}
          className="cards-slider__button cards-slider__prev-button">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        <button
          onClick={nextClickHandler}
          className="cards-slider__button cards-slider__next-button">
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
      </div>
      <SliderWrapper
        mainWrapperWidth={sliderWrapperWidth}
        transformWidth={itemNodeWidth * activeCardIndex}>
        {props?.items.map((item) => (
          <div className="cards-slider__item" key={item.mls} style={{ width: itemNodeWidth }}>
            <ListingCard
              link={item.link}
              img={item.thumb}
              imgAlt={item.imgAlt}
              address={item.address}
              price={item.price}
              properties={item.properties}
            />
          </div>
        ))}
      </SliderWrapper>
    </div>
  );
};

CardsSlider.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default CardsSlider;
