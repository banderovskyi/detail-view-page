import React from 'react';
import PropTypes from 'prop-types';
import './Aside.scss';
import Toolbar from '../Toolbar/Toolbar';
import InfoCallout from '../InfoCallout/InfoCallout';
import ListingTitle from '../ListingTitle/ListingTitle';
import ListingDetail from '../ListingDetail/ListingDetail';
import ListingTabs from '../ListingTabs/ListingTabs';

const Aside = (props) => {
  return (
    <aside className={`aside ${props.className ? props.className : ''}`}>
      <Toolbar className="aside__toolbar" />
      <ListingTitle className="aside__listing-title" />
      <InfoCallout className="aside__info-callout" />
      <ListingDetail className="aside__card" />
      <ListingTabs className="aside__card" />
    </aside>
  );
};

Aside.propTypes = {
  className: PropTypes.string,
};

export default Aside;
