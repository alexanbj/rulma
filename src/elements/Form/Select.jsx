import React, { PropTypes } from 'react';

import modifiers, { sizePropType } from '../../modifiers';
import Control from '../../control';

const Select = ({ control, expanded, fullWidth, ...props }) => {
  const [classes, restProps] = modifiers(props, 'select', {
    'is-fullwidth': fullWidth,
  });

  const select = (
    <span className={classes}>
      <select {...restProps} />
    </span>
  );

  if (control) {
    return (
      <Control expanded={expanded}>
        {select}
      </Control>
    );
  }

  return select;
};

Select.propTypes = {
  control: PropTypes.bool, // Wraps the Select in a <Control />
  expanded: PropTypes.bool, // When within addons and groups
  fullWidth: PropTypes.bool,
  size: sizePropType,
};

Select.defaultProps = {
  control: false,
  expanded: false,
  fullWidth: false,
  size: null,
};

export default Select;
