import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar';

const Aside = (props) => {
  return (
    <aside className={`aside ${props.className ? props.className : ''}`}>
      <Toolbar className="aside__toolbar" />
    </aside>
  );
};

Aside.propTypes = {
  className: PropTypes.string,
};

export default Aside;
