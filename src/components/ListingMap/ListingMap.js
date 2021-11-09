import React from 'react';
import './ListingMap.scss';
import PropTypes from 'prop-types';

const ListingMap = (props) => {
  return (
    <div className={`listing-map ${props.className ? props.className : ''}`}>
      <iframe title="Listing-Map" src={props.location} loading="lazy"></iframe>
    </div>
  );
};

ListingMap.propTypes = {
  className: PropTypes.string,
  location: PropTypes.string,
};

export default ListingMap;
