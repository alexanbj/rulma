import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuLabel from './MenuLabel';
import MenuList from './MenuList';
import MenuItem from './MenuItem';

const Menu = ({ tag: Tag, className, ...props }) => {
  const classes = classNames('menu', className);
  return <Tag className={classes} {...props} />;
};

Menu.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Menu.defaultProps = {
  className: null,
  tag: 'div',
};

Menu.Label = MenuLabel;
Menu.List = MenuList;
Menu.Item = MenuItem;

export default Menu;
