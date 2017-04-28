import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { modifierPropTypes } from '../../modifiers';

const Tile = ({ ancestor, child, children, parent, size, tag: Tag, vertical, ...props }) => {
  const [classes, restProps] = modifiers(props, 'tile', {
    'is-ancestor': ancestor,
    'is-child': child,
    'is-parent': parent,
    'is-vertical': vertical,
    [`is-${size}`]: size,
  });

  return (
    <Tag className={classes} {...restProps}>
      {children}
    </Tag>
  );
};

Tile.propTypes = {
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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  vertical: PropTypes.bool,
};

Tile.defaultProps = {
  ancestor: false,
  child: false,
  parent: false,
  size: null,
  tag: 'div',
  vertical: false,
};

export default Tile;
