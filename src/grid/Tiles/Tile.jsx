import React, { PropTypes } from 'react';

import classNames, { modifierPropTypes } from '../../modifiers';

const Tile = ({ ancestor, child, children, cols, parent, vertical, ...props }) => {
  const [classes, restProps] = classNames(props, 'tile', {
    'is-ancestor': ancestor,
    'is-child': child,
    'is-parent': parent,
    'is-vertical': vertical,
    [`is-${cols}`]: cols,
  }, child ? React.Children.only(children).props.className : null);

  /**
  * We want child tiles to evenly fill their parent tiles, so we apply classes
  * directly to the children element here to get the wanted effect.
  */
  if (child) {
    return React.cloneElement(
      React.Children.only(children),
      { className: classes, ...restProps },
    );
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
  cols: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  ...modifierPropTypes,
  parent: PropTypes.bool,
  vertical: PropTypes.bool,
};

Tile.defaultProps = {
  ancestor: false,
  child: false,
  cols: null,
  parent: false,
  vertical: false,
};

export default Tile;
