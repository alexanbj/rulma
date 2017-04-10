import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FieldLabel from '../../control/FieldLabel';

/* eslint-disable jsx-a11y/label-has-for */
const Label = ({ className, field, ...props }) => {
  const label = <label className={classNames('label', className)} {...props} />;

  if (field) {
    return <FieldLabel>{label}</FieldLabel>;
  }

  return label;
};

Label.propTypes = {
  className: PropTypes.string,
  field: PropTypes.bool,
};

Label.defaultProps = {
  className: null,
  field: false, // Wraps label in a FieldLabel for use inside horizontal fields
};

export default Label;
