import React, { Component, PropTypes } from 'react';


/*
 * This component can be stateless
 * and receive props and then decide whether it should be
 * open or closed
 * */
const MenuItem = ({ children, open, onClick, ...props }) => {
  const hasSingleChild = children.constructor.name === 'Object';
  return (
    <li
      onClick={onClick}
      {...props}
    >
      {hasSingleChild ? children : children[0]}
      {hasSingleChild ? null : open && children[1]}
    </li>
  );
};

MenuItem.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};


export default MenuItem;
