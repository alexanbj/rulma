import React, { PropTypes } from 'react';
import classNames, { colorPropType, sizePropType, modifierPropTypes } from '../../modifiers';

const Progress = (props) => {
  const [classes, restProps] = classNames(props, 'progress');
  return (
    <progress className={classes} {...restProps} />
  );
};

Progress.propTypes = {
  color: colorPropType,
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ...modifierPropTypes,
  size: sizePropType,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Progress.defaultProps = {
  color: null,
  max: null,
  size: null,
  value: null,
};

export default Progress;
