import React from 'react';
import PropTypes from 'prop-types';
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
