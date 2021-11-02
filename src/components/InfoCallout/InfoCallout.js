/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InfoCallout.scss';
import { faBath, faBed, faBorderAll, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import IconListItem from './IconListItem';

const InfoCallout = (props) => {
  const [listingInfo] = useState({
    price: '7,998,000',
    beds: '7',
    baths: '8',
    acres: '0.5',
    sqft: '7,450',
    status: 'ACT',
  });
  const { price, beds, baths, acres, sqft, status } = listingInfo;

  return (
    <div className={`info-callout ${props.className ? props.className : ''} `}>
      {price && <div className="info-callout__price">${price}</div>}
      <ul className="info-callout__icon-list icon-list">
        {beds && <IconListItem title="Beds" value={beds} icon={faBed} />}
        {baths && <IconListItem title="Baths" value={baths} icon={faBath} />}
        {acres && <IconListItem title="Acres" value={acres} icon={faRulerCombined} />}
        {sqft && <IconListItem title="SqFt" value={sqft} icon={faBorderAll} />}
      </ul>
      {status && (
        <div className="info-callout__status">
          Status: <span>{status}</span>
        </div>
      )}
    </div>
  );
};

InfoCallout.propTypes = { className: PropTypes.string };

export default InfoCallout;
