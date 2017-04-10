import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { modifierPropTypes, sizePropType } from '../../modifiers';

import Tab from './Tab';

const Tabs = ({ boxed, centered, children, fullWidth, right, tag: Tag, toggle, ...props }) => {
  const [classes, restProps] = modifiers(props, 'tabs', {
    'is-centered': centered,
    'is-right': right,
    'is-boxed': boxed,
    'is-toggle': toggle,
    'is-fullwidth': fullWidth,
  });

  return (
    <Tag className={classes} {...restProps}>
      <ul>{children}</ul>
    </Tag>
  );
};

Tabs.propTypes = {
  boxed: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  ...modifierPropTypes,
  right: PropTypes.bool,
  size: sizePropType,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.bool,
};

Tabs.defaultProps = {
  boxed: false,
  centered: false,
  children: null,
  fullWidth: false,
  right: false,
  size: null,
  tag: 'div',
  toggle: false,
};

// Add sub components to top level export for ease of use
Tabs.Tab = Tab;

export default Tabs;
