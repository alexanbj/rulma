import React, { PropTypes } from 'react';
import classNames from 'classnames';

const NavRight = ({ className, collapsed, mobileCollapse, ...props }) =>
  <div
    className={classNames('nav-right', className, { 'is-active': !collapsed, 'nav-menu': mobileCollapse })}
    {...props}
  />;

NavRight.propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  mobileCollapse: PropTypes.bool,
};

NavRight.defaultProps = {
  className: null,
  mobileCollapse: true,
  collapsed: true,
};

export default NavRight;
