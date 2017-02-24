import React, { PropTypes } from 'react';
import classNames from 'classnames';

const NavToggle = ({ className, ...props }) =>
  <span className={classNames('nav-toggle', className)} {...props}>
    <span />
    <span />
    <span />
  </span>;

NavToggle.propTypes = {
  className: PropTypes.string,
};

NavToggle.defaultProps = {
  className: null,
};

export default NavToggle;
