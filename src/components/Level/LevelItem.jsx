import React from 'react';

import classNames from '../../modifiers';

const LevelItem = (props) => {
  const [classes, restProps] = classNames(props, 'level-item');
  return (
    <div className={classes} {...restProps} />
  );
};

export default LevelItem;
