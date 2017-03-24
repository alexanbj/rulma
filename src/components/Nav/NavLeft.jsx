import React from 'react';

import classNames, { modifierPropTypes } from '../../modifiers';

const NavLeft = (props) => {
  const [classes, restProps] = classNames(props, 'nav-left');
  return <div className={classes} {...restProps} />;
};

NavLeft.propTypes = {
  ...modifierPropTypes,
};

export default NavLeft;
