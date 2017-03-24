import React, { PropTypes } from 'react';

import modifiers from '../../modifiers';

const LevelItem = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'level-item');

  return <Tag className={classes} {...restProps} />;
};

LevelItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

LevelItem.defaultProps = {
  tag: 'div',
};

export default LevelItem;
