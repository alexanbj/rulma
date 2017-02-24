import React, { PropTypes } from 'react';
import classNames from 'classnames';

const NavLeft = ({ className, ...props }) =>
  <div className={classNames('nav-left', className)} {...props} />;

NavLeft.propTypes = {
  className: PropTypes.string,
};

NavLeft.defaultProps = {
  className: null,
};

export default NavLeft;
