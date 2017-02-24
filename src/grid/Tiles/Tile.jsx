import React, { PropTypes } from 'react';

import classNames, { modifierPropTypes } from '../../modifiers';

const Tile = ({ ancestor, child, parent, vertical, ...props }) => {
  const [classes, restProps] = classNames(props, 'tile', {
    'is-ancestor': ancestor,
    'is-child': child,
    'is-parent': parent,
    'is-vertical': vertical,
  });

  return (
    <div className={classes} {...restProps} />
  );
};

Tile.propTypes = {
  ancestor: PropTypes.bool,
  child: PropTypes.bool,
  ...modifierPropTypes,
  parent: PropTypes.bool,
  vertical: PropTypes.bool,
};

Tile.defaultProps = {
  ancestor: false,
  child: false,
  parent: false,
  vertical: false,
};

export default Tile;
