import React from 'react';
import PropTypes from 'prop-types';

import modifiers from '../modifiers';

/**
* Should only contain a <Button />, <Input />, <Select /> or <Textarea />
* <Help /> should NOT go here, but in the <Field /> that wraps a <Control />
*/
const Control = (
  {
    expanded,
    icon,
    iconRight,
    loading,
    tag: Tag,
    ...props
  },
) => {
  const [classes, restProps] = modifiers(props, 'control', {
    'is-expanded': expanded,
    'has-icon': icon,
    'has-icon-right': iconRight,
    'is-loading': loading,
  });

  return <Tag className={classes} {...restProps} />;
};

Control.propTypes = {
  className: PropTypes.string,
  expanded: PropTypes.bool,
  icon: PropTypes.bool,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Control.defaultProps = {
  className: null,
  expanded: false,
  icon: false,
  iconRight: false,
  loading: false,
  tag: 'div',
};

export default Control;
