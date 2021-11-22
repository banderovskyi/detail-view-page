import React, { useState } from 'react';
import './Footer.scss';
import FooterNav from './FooterNav/FooterNav';
import SocialIcon from '../UI/SocialIcon/SocialIcon';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import FooterBottom from './FooterBottom/FooterBottom';

const Footer = (props) => {
  const [logoInfo] = useState({
    link: '/',
    src: 'https://s3.amazonaws.com/files.usmre.com/8844/usm-logo-blue.svg',
    alt: 'Logo',
  });
  const [socialLinks, setSocialLinks] = useState([
    { href: 'https://www.facebook.com/', icon: faFacebookF },
    { href: 'https://www.instagram.com/', icon: faInstagram },
  ]);

  return (
    <footer className={`footer`}>
      <div className="container">
        <div className="footer__main">
          <div className="footer__logo">
            <a href={logoInfo.link}>
              <img src={logoInfo.src} alt={logoInfo.alt ? logoInfo.alt : 'Company logo'} />
            </a>
          </div>
          <FooterNav />
          <div className="footer__footer-social footer-social">
            <ul className="footer-social__list">
              {socialLinks.map((socialLink, i) => (
                <li className="footer-social__item" key={socialLink.href}>
                  <SocialIcon
                    className="footer-social__icon"
                    icon={socialLink.icon}
                    href={socialLink.href}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
