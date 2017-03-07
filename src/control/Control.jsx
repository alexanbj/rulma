import React, { PropTypes } from 'react';

import classNames from '../modifiers';

/**
* This is _the_ control component. It is used for spacing between form controls and buttons.
*/
const Control = ({
    addons, addonsCentered, addonsRight,
    expanded,
    grouped, groupedCentered, groupedRight,
    horizontal,
    icon, iconRight,
    loading,
    ...props
  }) => {
  const [classes, restProps] = classNames(props, 'control', {
    'has-addons': addons,
    'has-addons-centered': addonsCentered,
    'has-addons-right': addonsRight,
    'is-expanded': expanded,
    'is-grouped': grouped,
    'is-grouped-centered': groupedCentered,
    'is-grouped-right': groupedRight,
    'is-horizontal': horizontal,
    'has-icon': icon,
    'has-icon-right': iconRight,
    'is-loading': loading,
  });

  return (
    <div className={classes} {...restProps} />
  );
};

Control.propTypes = {
  addons: PropTypes.bool,
  addonsCentered: PropTypes.bool,
  addonsRight: PropTypes.bool,
  expanded: PropTypes.bool,
  grouped: PropTypes.bool,
  groupedCentered: PropTypes.bool,
  groupedRight: PropTypes.bool,
  horizontal: PropTypes.bool,
  icon: PropTypes.bool,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
};

Control.defaultProps = {
  addons: false,
  addonsCentered: false,
  addonsRight: false,
  expanded: false,
  grouped: false,
  groupedCentered: false,
  groupedRight: false,
  horizontal: false,
  icon: false,
  iconRight: false,
  loading: false,
};

export default Control;
