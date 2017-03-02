import React, { PropTypes } from 'react';

// this component generates lint error:
// Visible, non-interactive elements should not have mouse or keyboard event listeners
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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

MenuItem.defaultProps = {
  open: false,
  onClick: () => {},
};


export default MenuItem;
