import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { sizePropType } from '../../modifiers';
import Control from '../../control';

const Select = ({ expanded, fullWidth, noControl, ...props }) => {
  const [classes, restProps] = modifiers(props, 'select', {
    'is-fullwidth': fullWidth,
  });

  const select = (
    <span className={classes}>
      <select {...restProps} />
    </span>
  );

  if (!noControl) {
    return (
      <Control expanded={expanded}>
        {select}
      </Control>
    );
  }

  return select;
};

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool, // When within addons and groups
  fullWidth: PropTypes.bool, // When not within addons and groups
  noControl: PropTypes.bool, // Don't wrap the select with a control container
  size: sizePropType,
};

Select.defaultProps = {
  className: null,
  disabled: false,
  expanded: false,
  fullWidth: false,
  noControl: false,
  size: null,
};

export default Select;
