import React, { PropTypes } from 'react';
import classNames from 'classnames';

const MenuItem = ({ active, className, ...props }) => (
  <li>
    <a
      className={classNames(className, { 'is-active': active })}
      {...props}
    />
  </li>
);

MenuItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
};

MenuItem.defaultProps = {
  active: false,
  className: null,
  href: null,
};

export default MenuItem;
