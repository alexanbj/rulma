import React from 'react';

import classNames, { modifierPropTypes } from '../../modifiers';

const HeroBody = (props) => {
  const [classes, restProps] = classNames(props, 'hero-body');
  return <div className={classes} {...restProps} />;
};

HeroBody.propTypes = {
  ...modifierPropTypes,
};

export default HeroBody;
