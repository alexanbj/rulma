import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { modifierPropTypes, sizePropType } from '../../modifiers';

import Tab from './Tab';

const Tabs = ({
  as: ElementType,
  boxed,
  centered,
  children,
  fullWidth,
  right,
  toggle,
  ...props
}) => {
  const [classes, restProps] = modifiers(props, 'tabs', {
    'is-centered': centered,
    'is-right': right,
    'is-boxed': boxed,
    'is-toggle': toggle,
    'is-fullwidth': fullWidth,
  });

  return (
    <ElementType className={classes} {...restProps}>
      <ul>{children}</ul>
    </ElementType>
  );
};

Tabs.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
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
  as: 'div',
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
