import React, { PropTypes } from 'react';

import classNames from '../modifiers';

/**
* This is _the_ control component. It is used for spacing between form controls and buttons.
* Use this directly in really special cases,
* although the recommeneded approach is to use <Addons />, <Group /> etc.
*/
const Control = ({ addons, centered, expanded, grouped, horizontal, loading, right, ...props }) => {
  const [classes, restProps] = classNames(props, 'control', {
    'has-addons': addons,
    'has-addons-centered': centered,
    'is-expanded': expanded,
    'is-grouped': grouped,
    'is-horizontal': horizontal,
    'is-loading': loading,
    'has-addons-right': right,
  });

  return (
    <div className={classes} {...restProps} />
  );
};

Control.isControl = true;

Control.propTypes = {
  addons: PropTypes.bool,
  centered: PropTypes.bool,
  grouped: PropTypes.bool,
  horizontal: PropTypes.bool,
  expanded: PropTypes.bool,
  loading: PropTypes.bool,
  right: PropTypes.bool,
};

Control.defaultProps = {
  addons: false,
  centered: false,
  expanded: false,
  grouped: false,
  horizontal: false,
  loading: false,
  right: false,
};

export default Control;
