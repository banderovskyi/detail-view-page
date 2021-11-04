import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DescriptionCard from '../UI/DescriptionCard/DescriptionCard';

const ListingDetail = (props) => {
  const [title] = useState('Listing Description');
  const [description] = useState(
    "Elevator possibilities. Additional space can be added with elevator. Once inside this compound you don't know you're in the city. Multiple gardens encasing the property are so dense you can't see beyond the trees. New Construction 2020. Perfection is the only word to describe this stunning property. Ideal for the urban family who wants a city lifestyle but demands an outdoor experience that is breathtaking. Pool capable. The rear terrace has a Wolf Grill,Sub-Zero and an ashlar stonewall that exudes quality. Heated garage has a 100 amp Tesla charging station,wifi,cameras & alarms. Second floor has a 600 sq foot heated Ipe private deck with 25 trees in custom cedar planters,cameras and wifi. Unlimited hyper luxury interior customizations with high-end features. Both Radiant & Hydro heat in 20 rooms,5 wolf ovens,3 Sub-Zeros,3 washers/dryers,2 dishwashers,all 4 utilities added,new sewer,2 inch water line,4 inch gas line,400 amps electric buried. Nothing compares in MA!!"
  );

  return (
    <div className="listing-detail">
      <DescriptionCard title={title} description={description} />
    </div>
  );
};

ListingDetail.propTypes = {};

export default ListingDetail;
