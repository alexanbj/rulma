import React from 'react';
import PropTypes from 'prop-types';

import classNames, { modifierPropTypes } from '../../modifiers';

const NavItem = ({ active, brand, children, tab, ...props }) => {
  const child = React.Children.only(children);

  const [classes, restProps] = classNames(props, 'nav-item', {
    'is-active': active,
    'is-brand': brand,
    'is-tab': tab,
  });

  return React.cloneElement(child, { className: classes, ...restProps });
};

NavItem.propTypes = {
  active: PropTypes.bool,
  brand: PropTypes.bool,
  ...modifierPropTypes,
  tab: PropTypes.bool,
};

NavItem.defaultProps = {
  active: false,
  brand: false,
  tab: false,
};

export default NavItem;
