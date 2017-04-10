import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
* The hamurger menu.
* Only visibile on mobile.
*/
const NavToggle = ({ active, className, ...props }) => (
  <span className={classNames('nav-toggle', className, { 'is-active': active })} {...props}>
    <span />
    <span />
    <span />
  </span>
);

NavToggle.propTypes = {
  active: PropTypes.bool, // Set to true when the hamburger menu is visible
  className: PropTypes.string,
};

NavToggle.defaultProps = {
  active: false,
  className: null,
};

export default NavToggle;
