import React from 'react';

import classNames from '../../modifiers';

const Heading = (props) => {
  const [classes, restProps] = classNames(props, 'heading');
  return <p className={classes} {...restProps} />;
};

export default Heading;
