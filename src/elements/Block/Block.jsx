import React from 'react';

import modifiers from '../../modifiers';

const Block = (props) => {
  const [classes, restProps] = modifiers(props, 'block');
  return <div className={classes} {...restProps} />;
};

export default Block;
