import React, { PropTypes } from 'react';

import modifiers from '../modifiers';

const Field = (
  {
    addons,
    addonsCentered,
    addonsFullWidth,
    addonsRight,
    grouped,
    groupedCentered,
    groupedRight,
    horizontal,
    tag: Tag,
    ...props
  },
) => {
  const [classes, restProps] = modifiers(props, 'field', {
    'has-addons': addons,
    'has-addons-centered': addonsCentered,
    'has-addons-fullwidth': addonsFullWidth,
    'has-addons-right': addonsRight,
    'is-grouped': grouped,
    'is-grouped-centered': groupedCentered,
    'is-grouped-right': groupedRight,
    'is-horizontal': horizontal,
  });

  return <Tag className={classes} {...restProps} />;
};

Field.propTypes = {
  addons: PropTypes.bool,
  addonsCentered: PropTypes.bool,
  addonsFullWidth: PropTypes.bool,
  addonsRight: PropTypes.bool,
  className: PropTypes.string,
  grouped: PropTypes.bool,
  groupedCentered: PropTypes.bool,
  groupedRight: PropTypes.bool,
  horizontal: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Field.defaultProps = {
  addons: false,
  addonsCentered: false,
  addonsFullWidth: false,
  addonsRight: false,
  className: null,
  grouped: false,
  groupedCentered: false,
  groupedRight: false,
  horizontal: false,
  tag: 'div',
};

export default Field;
