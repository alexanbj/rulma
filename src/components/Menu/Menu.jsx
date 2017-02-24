import React, { PropTypes } from 'react';
import classNames from 'classnames';

import MenuLabel from './MenuLabel';
import MenuList from './MenuList';
import MenuItem from './MenuItem';

const Menu = ({ className, ...props }) => {
  const classes = classNames('menu', className);
  return (
    <aside className={classes} {...props} />
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: null,
};

Menu.Label = MenuLabel;
Menu.List = MenuList;
Menu.Item = MenuItem;

export default Menu;
