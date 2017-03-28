import React, { PropTypes } from 'react';
import modifiers, { sizePropType } from '../modifiers';

/**
 * Used within <Field horizontal />
 */
const FieldLabel = (props) => {
  const [classes, restProps] = modifiers(props, 'field-label');
  return <div className={classes} {...restProps} />;
};

FieldLabel.propTypes = {
  className: PropTypes.string,
  size: sizePropType,
};

FieldLabel.defaultProps = {
  className: null,
  size: null,
};

export default FieldLabel;
