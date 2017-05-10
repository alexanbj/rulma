import React from 'react';
import PropTypes from 'prop-types';

import modifiers from '../../modifiers';

const LevelItem = ({ as: ElementType, narrow, ...props }) => {
  const [classes, restProps] = modifiers(props, 'level-item', {
    'is-narrow': narrow,
  });

  return <ElementType className={classes} {...restProps} />;
};

LevelItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  narrow: PropTypes.bool,
};

LevelItem.defaultProps = {
  as: 'div',
  narrow: false,
};

export default LevelItem;
