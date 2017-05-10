import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { modifierPropTypes } from '../../modifiers';

const Tile = ({ as: ElementType, ancestor, child, children, parent, size, vertical, ...props }) => {
  const [classes, restProps] = modifiers(props, 'tile', {
    'is-ancestor': ancestor,
    'is-child': child,
    'is-parent': parent,
    'is-vertical': vertical,
    [`is-${size}`]: size,
  });

  return (
    <ElementType className={classes} {...restProps}>
      {children}
    </ElementType>
  );
};

Tile.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  ancestor: PropTypes.bool,
  child: PropTypes.bool,
  ...modifierPropTypes,
  parent: PropTypes.bool,
  size: PropTypes.oneOf([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  vertical: PropTypes.bool,
};

Tile.defaultProps = {
  as: 'div',
  ancestor: false,
  child: false,
  parent: false,
  size: null,
  vertical: false,
};

export default Tile;
