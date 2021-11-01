import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ListingTitle.scss';

const ListingTitle = (props) => {
  const [titleProperties] = useState({
    address: '59 High Street, Brookline Village',
    town: 'Brookline',
    state: 'MA',
    zipCode: '02445',
  });

  return (
    <h1 className={`listing-title ${props.className ? props.className : ''}`}>
      {titleProperties.address && (
        <span className="listing-title__address">{titleProperties.address}</span>
      )}
      {titleProperties.town && (
        <span className="listing-title__town">{titleProperties.town}, </span>
      )}
      {titleProperties.state && (
        <span className="listing-title__state">{titleProperties.state} </span>
      )}
      {titleProperties.zipCode && (
        <span className="listing-title__zipcode">{titleProperties.zipCode} </span>
      )}
    </h1>
  );
};

ListingTitle.propTypes = {
  className: PropTypes.string,
};

export default ListingTitle;
