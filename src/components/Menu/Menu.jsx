import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuLabel from './MenuLabel';
import MenuList from './MenuList';
import MenuItem from './MenuItem';

const Menu = ({ as: ElementType, className, ...props }) => {
  const classes = classNames('menu', className);
  return <ElementType className={classes} {...props} />;
};

Menu.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

Menu.defaultProps = {
  as: 'div',
  className: null,
};

Menu.Label = MenuLabel;
Menu.List = MenuList;
Menu.Item = MenuItem;

export default Menu;
