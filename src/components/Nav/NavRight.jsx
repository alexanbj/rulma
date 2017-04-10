import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavRight = ({ active, className, menu, ...props }) => (
  <div
    className={classNames('nav-right', className, { 'is-active': active, 'nav-menu': menu })}
    {...props}
  />
);

NavRight.propTypes = {
  // Show the collapsible menu
  active: PropTypes.bool,
  className: PropTypes.string,
  // Turn this into a collapsible menu on mobile
  menu: PropTypes.bool,
};

NavRight.defaultProps = {
  active: false,
  className: null,
  menu: false,
};

export default NavRight;
