import React, { useState } from 'react';
import './MoreLikeThis.scss';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardsSlider from '../CardsSlider/CardsSlider';
import moreLikeThisData from './moreLikeThisData';

const MoreLikeThis = (props) => {
  const [sliderData] = useState(moreLikeThisData);

  return (
    <div className="more-like-this">
      <div className="container">
        <div className="more-like-this__header">
          <h2 className="section-title">
            <span className="section-title__sub">View More</span>
            <span className="section-title__main">
              Similar <b>Properties</b>
            </span>
          </h2>
          <a href="/our-listings/" className="link link--arrow more-like-this__header-link">
            All Listings
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </a>
        </div>
        <CardsSlider className="more-like-this__slider" items={sliderData} />
      </div>
    </div>
  );
};

export default MoreLikeThis;
