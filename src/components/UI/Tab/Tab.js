import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tab = (props) => {
  const [isActive, setIsActive] = useState(props.isActiveByDefault || false);

  const clickHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div
      className={`tab ${isActive ? 'tab--active' : ''} ${props.className ? props.className : ''}`}>
      <button className="tab__header" onClick={clickHandler}>
        <div className="tab__title">{props.title}</div>
        <div className="tab__icon">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </button>
      <div className="tab__content">{props.children}</div>
    </div>
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Tab;
