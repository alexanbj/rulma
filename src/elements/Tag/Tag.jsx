import React from 'react';

import classNames, { colorPropType, sizePropType } from '../../modifiers';

const Tag = (props) => {
  const [classes, restProps] = classNames(props, 'tag');
  return (
    <span className={classes} {...restProps} />
  );
};

Tag.propTypes = {
  color: colorPropType,
  size: sizePropType,
};

Tag.defaultProps = {
  color: null,
  size: null,
};

export default Tag;
