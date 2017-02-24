import React, { PropTypes } from 'react';

import classNames, { modifierPropTypes, sizePropType } from '../../modifiers';

import Tab from './Tab';

const Tabs = ({ boxed, centered, children, fullWidth, right, toggle, ...props }) => {
  const [classes, restProps] = classNames(props, 'tabs', {
    'is-centered': centered,
    'is-right': right,
    'is-boxed': boxed,
    'is-toggle': toggle,
    'is-fullwidth': fullWidth,
  });
  return (
    <div className={classes} {...restProps}>
      <ul>{children}</ul>
    </div>
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
  toggle: PropTypes.bool,
};

Tabs.defaultProps = {
  boxed: false,
  centered: false,
  children: null,
  fullWidth: false,
  right: false,
  size: null,
  toggle: false,
};

// Add sub components to top level export for ease of use
Tabs.Tab = Tab;

export default Tabs;
