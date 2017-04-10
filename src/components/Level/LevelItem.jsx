import React from 'react';
import PropTypes from 'prop-types';

import modifiers from '../../modifiers';

const LevelItem = ({ narrow, tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'level-item', { 'is-narrow': narrow });

  return <Tag className={classes} {...restProps} />;
};

LevelItem.propTypes = {
  narrow: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

LevelItem.defaultProps = {
  narrow: false,
  tag: 'div',
};

export default LevelItem;
