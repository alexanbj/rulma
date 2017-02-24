import React from 'react';

import classNames from '../../modifiers';

export const Heading = (props) => {
  const [classes, restProps] = classNames(props, 'heading');
  return (
    <p className={classes} {...restProps} />
  );
};

export default Heading;
