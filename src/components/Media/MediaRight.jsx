import React from 'react';

import classNames from '../../modifiers';

const MediaRight = (props) => {
  const [classes, restProps] = classNames(props, 'media-right');
  return (
    <div className={classes} {...restProps} />
  );
};

export default MediaRight;
