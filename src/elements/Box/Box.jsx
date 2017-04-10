import React from 'react';
import PropTypes from 'prop-types';
import modifiers, { modifierPropTypes } from '../../modifiers';

/**
* A white box to contain other elements.
*
* The <Box /> component is simply a container with a shadow, a border, a radius, and some padding.
*/
const Box = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'box');

  return <Tag className={classes} {...restProps} />;
};

Box.propTypes = {
  ...modifierPropTypes,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Box.defaultProps = {
  tag: 'div',
};

export default Box;
