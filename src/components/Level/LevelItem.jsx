import React from 'react';
import PropTypes from 'prop-types';

import modifiers from '../../modifiers';

const LevelItem = ({ as: ElementType, flexible, narrow, ...props }) => {
  const [classes, restProps] = modifiers(props, 'level-item', {
    'is-narrow': narrow,
    'is-flexible': flexible,
  });

  return <ElementType className={classes} {...restProps} />;
};

LevelItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  flexible: PropTypes.bool,
  narrow: PropTypes.bool,
};

LevelItem.defaultProps = {
  as: 'div',
  flexible: false, // Grow the Item (applies only within Level Left/Right)
  narrow: false,
};

export default LevelItem;
