import React, { PropTypes } from 'react';
import classNames from 'classnames';

import MenuLabel from './MenuLabel';
import MenuList from './MenuList';
import MenuSubList from './MenuSubList';
import MenuItem from './MenuItem';
import MenuItemLink from './MenuItemLink';

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
Menu.SubList = MenuSubList;
Menu.Item = MenuItem;
Menu.ItemLink = MenuItemLink;

export default Menu;
