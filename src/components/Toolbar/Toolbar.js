import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.scss';
import Button from '../UI/Button/Button';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

const Toolbar = (props) => {
  return (
    <div className={`toolbar ${props.className ? props.className : ''}`}>
      <div className="toolbar__item">
        <Button className="toolbar__btn" text="Favorite" icon={faHeart} isSecondary={true} />
      </div>
      <div className="toolbar__item">
        <Button className="toolbar__btn" text="Contact" icon={faEnvelope} />
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;
