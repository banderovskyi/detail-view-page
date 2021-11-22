import React from 'react';
import './FooterNav.scss';

import footerNavData from './footerNavData';

const FooterNav = (props) => {
  return (
    <div className="footer__nav footer-nav">
      {footerNavData?.map((footerCol, i) => (
        <div className="footer-nav__col" key={footerCol.title + i}>
          <h3 className="footer-nav__title">{footerCol.title}</h3>
          <ul className="footer-nav__links">
            {footerCol.links?.map(
              (footerLink, i) =>
                footerLink && (
                  <li className="footer-nav__link" key={footerLink.text + i}>
                    <a href={footerLink.href}>{footerLink.text}</a>
                  </li>
                )
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNav;
