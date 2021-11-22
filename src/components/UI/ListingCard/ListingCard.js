import React from 'react';
import './ListingCard.scss';
import PropTypes from 'prop-types';

const ListingCard = (props) => {
  return (
    <div className={`listing-card ${props.className ? props.className : ''}`}>
      <div className="listing-card__thumb">
        <a href={props.link}>
          <img
            src={props.img}
            alt={props.imgAlt || 'Listing Image'}
            className="listing-card__thumb-img"
          />
        </a>
      </div>
      <div className="listing-card__content">
        {props.address && (
          <h3 className="listing-card__address">
            <a href={props.link}>{props.address}</a>
          </h3>
        )}
        {props.price && <p className="listing-card__price">${props.price}</p>}
        {props.properties && (
          <ul className="listing-card__properties card-properties">
            {props.properties.map((prop, i) => (
              <li className="card-properties__item" key={prop.type + prop.value + i}>
                <span className="card-properties__value">{prop.value}</span>
                <span className="card-properties__type">{prop.type}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

ListingCard.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  address: PropTypes.string,
  price: PropTypes.string,
  properties: PropTypes.arrayOf(PropTypes.object),
};

export default ListingCard;
