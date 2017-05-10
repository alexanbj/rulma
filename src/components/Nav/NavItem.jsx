import React from 'react';
import PropTypes from 'prop-types';

import classNames, { modifierPropTypes } from '../../modifiers';

const NavItem = ({ as, active, brand, tab, ...props }) => {
  const [classes, restProps] = classNames(props, 'nav-item', {
    'is-active': active,
    'is-brand': brand,
    'is-tab': tab,
  });

  const ElementType = as || (props.href ? 'a' : 'div');

  return <ElementType className={classes} {...restProps} />;
};

NavItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  brand: PropTypes.bool,
  href: PropTypes.string,
  ...modifierPropTypes,
  tab: PropTypes.bool,
};

NavItem.defaultProps = {
  as: null,
  active: false,
  brand: false,
  href: null,
  tab: false,
};

export default NavItem;
