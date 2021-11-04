import React from 'react';
import PropTypes from 'prop-types';
import './ListingTabs.scss';
import Tab from '../UI/Tab/Tab';

const ListingTabs = (props) => {
  return (
    <div className={`listing-tabs ${props.className ? props.className : ''}`}>
      <Tab className="listing-tabs__item" title="Property Details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, porro.
      </Tab>
      <Tab className="listing-tabs__item" title="Interior Features">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, architecto ipsa magnam labore
        odio aspernatur dolores odit quaerat dicta totam expedita, quos optio ratione quas. Aliquid
        sed eveniet quo illo.
      </Tab>
    </div>
  );
};

ListingTabs.propTypes = {
  className: PropTypes.string,
};

export default ListingTabs;
