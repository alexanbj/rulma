import React from 'react';

import classNames from '../../modifiers';

const MediaContent = (props) => {
  const [classes, restProps] = classNames(props, 'media-content');
  return (
    <div className={classes} {...restProps} />
  );
};

export default MediaContent;
