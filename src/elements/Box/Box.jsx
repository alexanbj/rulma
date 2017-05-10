import React from 'react';
import PropTypes from 'prop-types';
import modifiers, { modifierPropTypes } from '../../modifiers';

/**
* A white box to contain other elements.
*
* The <Box /> component is simply a container with a shadow, a border, a radius, and some padding.
*/
const Box = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = modifiers(props, 'box');

  return <ElementType className={classes} {...restProps} />;
};

Box.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  ...modifierPropTypes,
};

Box.defaultProps = {
  as: 'div',
};

export default Box;
