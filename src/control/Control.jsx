import React, { PropTypes } from 'react';

import modifiers from '../modifiers';

const Control = ({
    expanded,
    icon, iconRight,
    loading,
    tag: Tag,
    ...props
  }) => {
  const [classes, restProps] = modifiers(props, 'control', {
    'is-expanded': expanded,
    'has-icon': icon,
    'has-icon-right': iconRight,
    'is-loading': loading,
  });

  return (
    <Tag className={classes} {...restProps} />
  );
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
