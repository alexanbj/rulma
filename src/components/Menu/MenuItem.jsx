import React, { PropTypes } from 'react';
import classNames from '../../modifiers';

/* eslint-disable jsx-a11y/anchor-has-content */
const MenuItem = ({ active, menu, open, tag: Tag, ...props }) => {
  const [classes, restProps] = classNames(props, { 'is-active': active });
  return (
    <li>
      <Tag className={classes} {...restProps} />
      {open && menu}
    </li>
  );
};

MenuItem.propTypes = {
  active: PropTypes.bool,
  open: PropTypes.bool,
  menu: PropTypes.func,
  tag: PropTypes.oneOfType([  // Something that renders as anchor, such as a React Router Link
    PropTypes.func,
    PropTypes.string,
  ]),
};

MenuItem.defaultProps = {
  active: false,
  open: true,
  menu: null,
  tag: 'a',
};


export default MenuItem;
