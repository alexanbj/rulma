import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { sizePropType, colorPropType } from '../../modifiers';
import Icon from '../Icon';
import Control from '../../control';

const Select = ({
  expanded,
  fullWidth,
  iconLeft,
  iconRight,
  iconSize,
  loading,
  noControl,
  ...props
}) => {
  const [classes, restProps] = modifiers(props, 'select', {
    'is-fullwidth': fullWidth,
    'is-loading': loading,
  });

  const select = (
    <span className={classes}>
      <select {...restProps} />
    </span>
  );

  if (!noControl) {
    return (
      <Control expanded={expanded} iconLeft={Boolean(iconLeft)} iconRight={Boolean(iconRight)}>
        {select}
        {iconLeft && <Icon icon={iconLeft} size={iconSize} left />}
        {iconRight && <Icon icon={iconRight} size={iconSize} right />}
      </Control>
    );
  }

  return select;
};

Select.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool, // When within addons and groups
  fullWidth: PropTypes.bool, // When not within addons and groups
  iconLeft: PropTypes.string, // Left icon
  iconRight: PropTypes.string, // Right icon
  iconSize: sizePropType, // Icon size
  loading: PropTypes.bool, // Show a loading indicator
  noControl: PropTypes.bool, // Don't wrap the select with a control container
  size: sizePropType,
};

Select.defaultProps = {
  className: null,
  color: null,
  disabled: false,
  expanded: false,
  fullWidth: false,
  iconLeft: null,
  iconRight: null,
  iconSize: null,
  loading: false,
  noControl: false,
  size: null,
};

export default Select;
