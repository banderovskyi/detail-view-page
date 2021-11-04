import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar';
import InfoCallout from '../InfoCallout/InfoCallout';
import ListingTitle from '../ListingTitle/ListingTitle';
import ListingDetail from '../ListingDetail/ListingDetail';


const Aside = (props) => {
  return (
    <aside className={`aside ${props.className ? props.className : ''}`}>
      <Toolbar className="aside__toolbar" />
      <ListingTitle className="aside__listing-title" />
      <InfoCallout className="aside__info-callout" />
      <ListingDetail />
    </aside>
  );
};

Aside.propTypes = {
  className: PropTypes.string,
};

export default Aside;
