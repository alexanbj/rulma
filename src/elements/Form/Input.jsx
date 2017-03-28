import React, { PropTypes } from 'react';

import Control from '../../control';
import modifiers, { colorPropType, sizePropType } from '../../modifiers';

const Input = ({ expanded, fullWidth, inline, loading, noControl, ...props }) => {
  const [classes, restProps] = modifiers(props, 'input', {
    'is-fullwidth': fullWidth,
    'is-inline': inline,
  });

  const input = <input className={classes} {...restProps} />;

  if (!noControl) {
    return (
      <Control expanded={expanded} loading={loading}>
        {input}
      </Control>
    );
  }

  return input;
};

Input.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool, // Expand when within Addons and Groups. Requires a control container
  fullWidth: PropTypes.bool, // Will display as block instead of inline-flex
  inline: PropTypes.bool,
  loading: PropTypes.bool, // Show a loading indicator. Requires a control container
  noControl: PropTypes.bool, // Don't wrap the input with a control container
  placeholder: PropTypes.string,
  size: sizePropType,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: null,
  color: null,
  disabled: false,
  expanded: false,
  fullWidth: false,
  inline: false,
  loading: false,
  noControl: false,
  placeholder: null,
  size: null,
  type: 'text',
};

export default Input;
