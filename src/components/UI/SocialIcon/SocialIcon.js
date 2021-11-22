/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import './SocialIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = (props) => {
  return (
    <a
      href={props.href}
      className={`social-link ${props.className ? props.className : ''}`}
      target="_blank"
      rel="nofollow">
      <FontAwesomeIcon icon={props.icon} size={props.size || '1x'} />
    </a>
  );
};

SocialIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
  size: PropTypes.string,
  href: PropTypes.string,
};

export default SocialIcon;
