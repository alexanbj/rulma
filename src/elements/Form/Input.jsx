import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Control from '../../control';
import modifiers, { colorPropType, sizePropType } from '../../modifiers';

const Input = ({
  expanded,
  fullWidth,
  iconLeft,
  iconRight,
  iconSize,
  inline,
  loading,
  noControl,
  ...props
}) => {
  const [classes, restProps] = modifiers(props, 'input', {
    'is-fullwidth': fullWidth,
    'is-inline': inline,
  });

  const input = <input className={classes} {...restProps} />;

  if (!noControl) {
    return (
      <Control
        expanded={expanded}
        iconLeft={Boolean(iconLeft)}
        iconRight={Boolean(iconRight)}
        loading={loading}
      >
        {input}
        {iconLeft && <Icon icon={iconLeft} size={iconSize} left />}
        {iconRight && <Icon icon={iconRight} size={iconSize} right />}
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
  iconLeft: PropTypes.string, // Left icon
  iconRight: PropTypes.string, // Right icon
  iconSize: sizePropType, // Icon size
  inline: PropTypes.bool,
  loading: PropTypes.bool, // Show a loading indicator. Requires a control container
  noControl: PropTypes.bool, // Don't wrap the input with a control container
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  size: sizePropType,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: null,
  color: null,
  disabled: false,
  expanded: false,
  fullWidth: false,
  iconLeft: null,
  iconRight: null,
  iconSize: null,
  inline: false,
  loading: false,
  noControl: false,
  placeholder: null,
  readOnly: false,
  size: null,
  type: 'text',
};

export default Input;
