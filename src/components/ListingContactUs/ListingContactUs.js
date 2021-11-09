import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ListingContactUs.scss';
import ContactItem from '../UI/ContactItem/ContactItem';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ListingContactUs = (props) => {
  const [tabs, setTabs] = useState([
    {
      title: 'Contact Us',
      isActive: true,
      content: <div>Contact Us Form Component</div>,
    },
    {
      title: 'Schedule a Visit',
      isActive: false,
      content: <div>Schedule a Visit Form Component</div>,
    },
  ]);
  const [activeTabContent, setActiveTabContent] = useState(
    tabs[0].content || <p className="text-small">Something went wrong</p>
  );

  const handleTabClick = (content, activeTitle) => {
    setActiveTabContent(content);
    setTabs((prevState) => {
      return prevState.map((item) => {
        if (item.title === activeTitle) {
          item.isActive = true;
          return item;
        } else {
          item.isActive = false;
          return item;
        }
      });
    });
  };

  return (
    <div className={`listing-contact-us ${props.className ? props.className : ''}`}>
      <h3 className="aside__title">Contact an Agent</h3>
      <ContactItem
        className="listing-contact-us__contact-item"
        description="Please Call"
        icon={faPhoneAlt}
        contact="617-233-5800"
        href="tel:617-233-5800"
      />
      <p className="listing-contact-us__desription text-small">
        Or, when you are ready, use this form to request more information or schedule a showing with
        a Luxury Residential Group Agent
      </p>
      <div className="listing-contact-us__tabs">
        {tabs.map((tab, i) => (
          <button
            className={`listing-contact-us__tab ${
              tab.isActive ? 'listing-contact-us__tab--active' : ''
            }`}
            key={tab.title + i}
            onClick={() => handleTabClick(tab.content, tab.title)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="listing-contact-us__main">{activeTabContent}</div>
    </div>
  );
};

ListingContactUs.propTypes = { className: PropTypes.string };

export default ListingContactUs;
