import React from 'react';

import classNames, { modifierPropTypes } from '../../modifiers';

const HeroHeader = (props) => {
  const [classes, restProps] = classNames(props, 'hero-head');
  return <div className={classes} {...restProps} />;
};

HeroHeader.propTypes = {
  ...modifierPropTypes,
};

export default HeroHeader;
