import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Aside.scss';
import Toolbar from '../Toolbar/Toolbar';
import InfoCallout from '../InfoCallout/InfoCallout';
import ListingTitle from '../ListingTitle/ListingTitle';
import ListingDetail from '../ListingDetail/ListingDetail';
import ListingTabs from '../ListingTabs/ListingTabs';
import ListingMap from '../ListingMap/ListingMap';

const Aside = (props) => {
  const [location] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737.4014284038651!2d-71.11920427073571!3d42.3296077986993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37998d7f3ae31%3A0xb78b45aaefd59a05!2s59%20High%20St%2C%20Brookline%2C%20MA%2002445!5e0!3m2!1sen!2sus!4v1636127187893!5m2!1sen!2sus'
  );

  return (
    <aside className={`aside ${props.className ? props.className : ''}`}>
      <Toolbar className="aside__toolbar" />
      <ListingTitle className="aside__listing-title" />
      <InfoCallout className="aside__info-callout" />
      <ListingDetail className="aside__card" />
      <ListingTabs className="aside__card" />
      <div className="aside__map">
        <h3 className="aside__title aside__title--padding">Map Location</h3>
        <ListingMap location={location} />
      </div>
    </aside>
  );
};

Aside.propTypes = {
  className: PropTypes.string,
};

export default Aside;
