import React, { PropTypes } from 'react';

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
  expanded: PropTypes.bool, // When within addons and groups
  fullWidth: PropTypes.bool, // When not within addons and groups
  noControl: PropTypes.bool, // Don't wrap the select with a control container
  size: sizePropType,
};

Select.defaultProps = {
  expanded: false,
  fullWidth: false,
  noControl: false,
  size: null,
};

export default Select;
