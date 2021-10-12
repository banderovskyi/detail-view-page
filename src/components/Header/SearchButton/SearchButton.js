import React from 'react';
import './SearchButton.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchButton = (props) => {
  return (
    <a href={props.link} className={`search-button ${props.className ? props.className : ''}`}>
      <span>{props.title}</span>
      <FontAwesomeIcon icon={faSearch} />
    </a>
  );
};

SearchButton.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};

export default SearchButton;
