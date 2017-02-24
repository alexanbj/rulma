import React from 'react';

import classNames from '../../modifiers';

const CardTitle = (props) => {
  const [classes, restProps] = classNames(props, 'card-header-title');
  return (
    <p className={classes} {...restProps} />
  );
};

export default CardTitle;
