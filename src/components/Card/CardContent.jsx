import React from 'react';

import classNames from '../../modifiers';

const CardContent = (props) => {
  const [classes, restProps] = classNames(props, 'card-content');
  return <div className={classes} {...restProps} />;
};

export default CardContent;
