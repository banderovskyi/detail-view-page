import React from 'react';
import './ListedBy.scss';
import { useState } from 'react';

const ListedBy = (props) => {
  const [agentName] = useState('Lisandra Jhonson');
  const [officeName] = useState('Nilmott Realty');

  return (
    <div className="listed-by">
      <div className="container">
        <p className="listed-by__text">
          Listed by {agentName && `${agentName} of `}
          {officeName && `${officeName}`}
        </p>
      </div>
    </div>
  );
};

export default ListedBy;
