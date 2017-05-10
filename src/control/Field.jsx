import React from 'react';
import PropTypes from 'prop-types';

import FieldBody from './FieldBody';
import FieldLabel from './FieldLabel';
import modifiers from '../modifiers';

const Field = ({
  as: ElementType,
  addons,
  addonsCentered,
  addonsFullWidth,
  addonsRight,
  grouped,
  groupedCentered,
  groupedRight,
  horizontal,
  narrow,
  ...props
}) => {
  const [classes, restProps] = modifiers(props, 'field', {
    'has-addons': addons,
    'has-addons-centered': addonsCentered,
    'has-addons-fullwidth': addonsFullWidth,
    'has-addons-right': addonsRight,
    'is-grouped': grouped,
    'is-grouped-centered': groupedCentered,
    'is-grouped-right': groupedRight,
    'is-horizontal': horizontal,
    'is-narrow': narrow,
  });

  return <ElementType className={classes} {...restProps} />;
};

Field.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  addons: PropTypes.bool,
  addonsCentered: PropTypes.bool,
  addonsFullWidth: PropTypes.bool,
  addonsRight: PropTypes.bool,
  className: PropTypes.string,
  grouped: PropTypes.bool,
  groupedCentered: PropTypes.bool,
  groupedRight: PropTypes.bool,
  horizontal: PropTypes.bool,
  narrow: PropTypes.bool,
};

Field.defaultProps = {
  as: 'div',
  addons: false,
  addonsCentered: false,
  addonsFullWidth: false,
  addonsRight: false,
  className: null,
  grouped: false,
  groupedCentered: false,
  groupedRight: false,
  horizontal: false,
  narrow: false,
};

Field.Body = FieldBody;
Field.Label = FieldLabel;

export default Field;
