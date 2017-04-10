import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { modifierPropTypes } from '../../modifiers';

const Tile = ({ ancestor, child, children, parent, size, vertical, ...props }) => {
  const [classes, restProps] = modifiers(
    props,
    'tile',
    {
      'is-ancestor': ancestor,
      'is-child': child,
      'is-parent': parent,
      'is-vertical': vertical,
      [`is-${size}`]: size,
    },
    child ? React.Children.only(children).props.className : null,
  );

  /**
  * We want child tiles to evenly fill their parent tiles, so we apply classes
  * directly to the children element here to get the wanted effect.
  */
  if (child) {
    return React.cloneElement(React.Children.only(children), { className: classes, ...restProps });
  }

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
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
  vertical: PropTypes.bool,
};

Tile.defaultProps = {
  ancestor: false,
  child: false,
  parent: false,
  size: null,
  vertical: false,
};

export default Tile;
