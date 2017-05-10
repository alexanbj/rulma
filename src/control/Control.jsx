import React from 'react';
import PropTypes from 'prop-types';

import modifiers from '../modifiers';

/**
* Should only contain a <Button />, <Input />, <Select /> or <Textarea />
* <Help /> should NOT go here, but in the <Field /> that wraps a <Control />
*/
const Control = ({ as: ElementType, expanded, iconLeft, iconRight, loading, ...props }) => {
  const [classes, restProps] = modifiers(props, 'control', {
    'is-expanded': expanded,
    'has-icons-left': iconLeft,
    'has-icons-right': iconRight,
    'is-loading': loading,
  });

  return <ElementType className={classes} {...restProps} />;
};

Control.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  expanded: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
};

Control.defaultProps = {
  as: 'div',
  className: null,
  expanded: false,
  iconLeft: false,
  iconRight: false,
  loading: false,
};

export default Control;
