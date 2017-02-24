import React from 'react';
import classNames, { modifierPropTypes } from '../../modifiers';

/**
* A white box to contain other elements.
*
* The <Box /> component is simply a container with a shadow, a border, a radius, and some padding.
*/
const Box = (props) => {
  const [classes, restProps] = classNames(props, 'box');
  return (
    <div className={classes} {...restProps} />
  );
};

Box.propTypes = {
  ...modifierPropTypes,
};

export default Box;
