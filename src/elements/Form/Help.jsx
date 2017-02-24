import React from 'react';

import classNames, { colorPropType } from '../../modifiers';

const Help = (props) => {
  const [classes, restProps] = classNames(props, 'help');
  return (
    <span className={classes} {...restProps} />
  );
};

Help.propTypes = {
  color: colorPropType,
};

Help.defaultProps = {
  color: null,
};

export default Help;
