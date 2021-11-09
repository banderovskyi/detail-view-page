import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ListingTabs.scss';
import Tab from '../UI/Tab/Tab';
import tabsInfoObj from './listingTabsObject';
import ListingTabCallout from './ListingTabCallout';

const ListingTabs = (props) => {
  const [tabsInfo] = useState(tabsInfoObj);

  return (
    <div className={`listing-tabs ${props.className ? props.className : ''}`}>
      {tabsInfo?.map((tab, i) => (
        <Tab
          className="listing-tabs__item"
          title={tab.title}
          isActiveByDefault={i === 0 ? true : false}
          key={tab.title + i}>
          {tab?.groupFields.map((field, i) => (
            <ListingTabCallout
              title={field.subTitle}
              items={field.fields}
              key={field.subTitle + i}
            />
          ))}
        </Tab>
      ))}
    </div>
  );
};

ListingTabs.propTypes = {
  className: PropTypes.string,
};

export default ListingTabs;
