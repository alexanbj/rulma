import React, { PropTypes } from 'react';
import classNames from 'classnames';

const MenuItemLink = ({ active, className, ...props }) => {
  return (
    <a
      className={classNames(className, { 'is-active': active })}
      {...props}
    />
  );
};

MenuItemLink.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
};

MenuItemLink.defaultProps = {
  active: false,
  className: null,
  href: null,
};

export default MenuItemLink;
