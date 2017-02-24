import React, { PropTypes } from 'react';

import classNames, { colorPropType, sizePropType } from '../../modifiers';

const Input = ({ fullWidth, ...props }) => {
  const [classes, restProps] = classNames(props, 'input', {
    'is-fullwidth': fullWidth,
  });

  return (
    <input className={classes} {...restProps} />
  );
};

Input.propTypes = {
  color: colorPropType,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  size: sizePropType,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  color: null,
  disabled: false,
  fullWidth: false,
  placeholder: null,
  size: null,
  type: 'text',
};

export default Input;
