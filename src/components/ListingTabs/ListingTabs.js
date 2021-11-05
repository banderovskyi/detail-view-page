import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ListingTabs.scss';
import Tab from '../UI/Tab/Tab';
import tabsInfoObj from './listingTabsObject';
import ListingTabCallout from './ListingTabCallout';

const ListingTabs = (props) => {
  const [tabsInfo] = useState(tabsInfoObj);

  console.log(tabsInfo);

  return (
    <div className={`listing-tabs ${props.className ? props.className : ''}`}>
      {tabsInfo?.map((tab, i) => (
        <Tab className="listing-tabs__item" title={tab.title} isActive={i === 0 ? true : false}>
          {tab?.groupFields.map((field, i) => (
            <ListingTabCallout title={field.subTitle} items={field.fields} />
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
