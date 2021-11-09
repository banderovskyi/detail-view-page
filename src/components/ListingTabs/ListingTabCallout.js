import React from 'react';
import PropTypes from 'prop-types';
import './ListingTabCallout.scss';

const ListingTabCallout = (props) => {
  return (
    <div className={`listing-tab-callout ${props.className ? props.className : ''}`}>
      <h3 className="listing-tab-callout__title">{props.title}</h3>
      <ul className="listing-tab-callout__list">
        {props.items?.map((item) => (
          <li className="listing-tab-callout__item" key={Math.random()}>
            <span className="listing-tab-callout__item-title">{item.name}:</span>
            <span className="listing-tab-callout__item-value">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

ListingTabCallout.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default ListingTabCallout;
