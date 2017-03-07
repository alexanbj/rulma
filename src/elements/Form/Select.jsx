import React, { PropTypes } from 'react';

import classNames, { sizePropType } from '../../modifiers';
import Control from '../../control/Control';

const Select = ({ control, expanded, fullWidth, ...props }) => {
  const [classes, restProps] = classNames(props, 'select', {
    'is-expanded': expanded,
    'is-fullwidth': fullWidth,
  });
  const select = (
    <span className={classes}>
      <select {...restProps} />
    </span>
  );

  if (control) {
    return (
      <Control>{select}</Control>
    );
  }

  return select;
};

Select.propTypes = {
  control: PropTypes.bool,          // Wraps the Select in a <Control />
  expanded: PropTypes.bool,         // Within addons and groups
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
