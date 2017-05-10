import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../modifiers';

const MenuItem = ({ as: ElementType, active, menu, open, ...props }) => {
  const [classes, restProps] = classNames(props, { 'is-active': active });
  return (
    <li>
      <ElementType className={classes} {...restProps} />
      {open && menu}
    </li>
  );
};

MenuItem.propTypes = {
  as: PropTypes.oneOfType([
    // Something that renders as anchor, such as a React Router Link
    PropTypes.func,
    PropTypes.string,
  ]),
  active: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  open: PropTypes.bool,
  menu: PropTypes.func,
};

MenuItem.defaultProps = {
  as: 'a',
  active: false,
  className: null,
  href: null,
  open: true,
  menu: null,
};

export default MenuItem;
