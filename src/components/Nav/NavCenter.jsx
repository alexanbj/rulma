import React, { PropTypes } from 'react';
import classNames from 'classnames';

const NavCenter = ({ className, ...props }) =>
  <div className={classNames('nav-center', className)} {...props} />;

NavCenter.propTypes = {
  className: PropTypes.string,
};

NavCenter.defaultProps = {
  className: null,
};

export default NavCenter;
