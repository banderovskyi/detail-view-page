import React from 'react';
import PropTypes from 'prop-types';
import SubscribeFrom from '../Forms/SubscribeFrom/SubscribeFrom';

const ListingSubsctibe = (props) => {
  return (
    <div className={`listing-subscribe ${props.className ? props.className : ''}`}>
      <h3 className="aside__title">Never Miss New Listings</h3>
      <p>Never miss new listings between $7,198,000 - $8,798,000 in this neighborhood</p>
      <SubscribeFrom id="aside-subscribe" />
    </div>
  );
};

ListingSubsctibe.propTypes = {
  className: PropTypes.string,
};

export default ListingSubsctibe;
