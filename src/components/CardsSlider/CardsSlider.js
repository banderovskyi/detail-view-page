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

  const cardsCountInit = {
    fullHd: 4,
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };
  const [cardsCount, setCardsCount] = useState(cardsCountInit.fullHd);

  const [itemsLength] = useState(props.items.length);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [mainWrapperWidth, setMainWrapperWidth] = useState(0);
  const [itemNodeWidth, setItemNodeWidth] = useState(0);
  const [transformWidth, setTransformWidth] = useState(0);

  const $sliderWrapper = useRef(null);

  const initSliderSizes = () => {
    const nodeWidth = $sliderWrapper.current.clientWidth;
    setItemNodeWidth(nodeWidth / cardsCount);
    setMainWrapperWidth((nodeWidth / cardsCount) * itemsLength);
    setTransformWidth(nodeWidth / cardsCount);
    if (window.innerWidth < mobileBreakpoint) {
      setCardsCount(cardsCountInit.mobile);
    } else if (mobileBreakpoint < window.innerWidth && window.innerWidth < tabletBreakpoint) {
      setCardsCount(cardsCountInit.tablet);
    } else if (tabletBreakpoint < window.innerWidth && window.innerWidth < laptopBreakpoint) {
      setCardsCount(cardsCountInit.desktop);
    } else {
      setCardsCount(cardsCountInit.fullHd);
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
  }, [activeItemIndex]);

  const nextClickHandler = () => {
    console.log('NEXT CLICK', activeItemIndex);
    setActiveItemIndex((prevIndex) => {
      if (prevIndex >= itemsLength - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
    setTransformWidth((prevValue) => {
      const newTransformWidth = prevValue + itemNodeWidth;
      console.log(newTransformWidth, mainWrapperWidth, itemNodeWidth, prevValue);
      // if (newTransformWidth >= mainWrapperWidth) {
      //   return 0;
      // }
      return newTransformWidth;
    });
  };

  const prevClickHandler = () => {
    console.log('PREV CLICK', activeItemIndex);
    setActiveItemIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return itemsLength - 1;
      }
      return prevIndex - 1;
    });
    setTransformWidth((prevValue) => {
      const newTransformWidth = prevValue - itemNodeWidth;
      if (newTransformWidth < 0) {
        console.log('Click on tthe firts', newTransformWidth, prevValue);

        return mainWrapperWidth - itemNodeWidth;
      }
      return newTransformWidth;
    });
  };

  return (
    <div className={`cards-slider ${props.className ? props.className : ''}`} ref={$sliderWrapper}>
      <div className="slider__buttons">
        <button onClick={prevClickHandler} className="slider__button slider__prev-button">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        <button onClick={nextClickHandler} className="slider__button slider__next-button">
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
      </div>
      <SliderWrapper
        mainWrapperWidth={mainWrapperWidth}
        transformWidth={
          activeItemIndex < itemsLength - cardsCount
            ? transformWidth
            : mainWrapperWidth - itemNodeWidth
        }>
        >
        {props?.items.map((item) => (
          <div className="cards-slider__item" key={item.mls} style={{ width: itemNodeWidth }}>
            <ListingCard
              className=""
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
