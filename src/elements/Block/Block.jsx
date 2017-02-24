import React from 'react';

import classNames from '../../modifiers';

const Block = (props) => {
  const [classes, restProps] = classNames(props, 'block');
  return (
    <div className={classes} {...restProps} />
  );
};

export default Block;
