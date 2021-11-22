import React from 'react';
import './FooterBottom.scss';
import associationsLogo from './associations-logo.png';
import USMLogo from './usm-logo-white.png';

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom__wrapper">
          <div className="footer-bottom__associations">
            <img src={associationsLogo} alt="Association logos" />
          </div>
          <div className="footer-bottom__privacy-link">
            <a href="/privacy-policy/">Privacy Policy</a>
          </div>
          <div className="footer-bottom__usm-logo">
            <a href="https://www.unionstreetmedia.com">
              <img src={USMLogo} alt="USM logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
