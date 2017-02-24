import React from 'react';

import classNames from '../../modifiers';

const MediaLeft = (props) => {
  const [classes, restProps] = classNames(props, 'media-left');
  return (
    <div className={classes} {...restProps} />
  );
};

export default MediaLeft;
