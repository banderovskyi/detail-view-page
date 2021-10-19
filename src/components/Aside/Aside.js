import React from 'react';
import PropTypes from 'prop-types';

const Aside = (props) => {
  return (
    <aside className={`aside ${props.className ? props.className : ''}`}>
      Aside comming soon...
    </aside>
  );
};

Aside.propTypes = {
  className: PropTypes.string,
};

export default Aside;
