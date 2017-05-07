import React from 'react';
import PropTypes from 'prop-types';

import classNames, { modifierPropTypes } from '../../modifiers';

const NavItem = ({ active, brand, tab, tag, ...props }) => {
  const [classes, restProps] = classNames(props, 'nav-item', {
    'is-active': active,
    'is-brand': brand,
    'is-tab': tab,
  });

  const Tag = tag || (props.href ? 'a' : 'div');

  return <Tag className={classes} {...restProps} />;
};

NavItem.propTypes = {
  active: PropTypes.bool,
  brand: PropTypes.bool,
  href: PropTypes.string,
  ...modifierPropTypes,
  tab: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

NavItem.defaultProps = {
  active: false,
  brand: false,
  href: null,
  tab: false,
  tag: null,
};

export default NavItem;
