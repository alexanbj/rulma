import React, { PropTypes } from 'react';
import classNames from 'classnames';

const MenuItemLink = ({ active, className, ...props }) => (
  <a
    className={classNames(className, { 'is-active': active })}
    {...props}
  >
    {props.children}
  </a>
);

MenuItemLink.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.element.isRequired,
};

MenuItemLink.defaultProps = {
  active: false,
  className: null,
  href: null,
};

export default MenuItemLink;
