import React, { PropTypes } from 'react';

import Control from '../../control';
import modifiers, { colorPropType, sizePropType } from '../../modifiers';

const Input = ({ control, expanded, fullWidth, inline, ...props }) => {
  const [classes, restProps] = modifiers(props, 'input', {
    'is-fullwidth': fullWidth,
    'is-inline': inline,
  });

  const input = <input className={classes} {...restProps} />;

  if (control) {
    return (
      <Control expanded={expanded}>
        {input}
      </Control>
    );
  }

  return input;
};

Input.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  control: PropTypes.bool, // Wraps the Input in a <Control />
  disabled: PropTypes.bool,
  expanded: PropTypes.bool, // When within Addons and Groups
  fullWidth: PropTypes.bool,
  inline: PropTypes.bool,
  placeholder: PropTypes.string,
  size: sizePropType,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: null,
  color: null,
  control: false,
  disabled: false,
  expanded: false,
  fullWidth: false,
  inline: false,
  placeholder: null,
  size: null,
  type: 'text',
};

export default Input;
