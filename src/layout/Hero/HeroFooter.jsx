import React from 'react';

import classNames, { modifierPropTypes } from '../../modifiers';

const HeroFooter = (props) => {
  const [classes, restProps] = classNames(props, 'hero-foot');
  return (
    <div className={classes} {...restProps} />
  );
};

HeroFooter.propTypes = {
  ...modifierPropTypes,
};

export default HeroFooter;
