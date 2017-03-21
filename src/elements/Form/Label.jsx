import React, { PropTypes } from 'react';
import classNames from 'classnames';

/* eslint-disable jsx-a11y/label-has-for */
const Label = ({ className, field, ...props }) => {
  const label = (
    <label className={classNames('label', className)} {...props} />
  );

  if (field) {
    return (
      <div className="field-label">{label}</div>
    );
  }

  return label;
};

Label.propTypes = {
  className: PropTypes.string,
  field: PropTypes.bool,
};

Label.defaultProps = {
  className: null,
  field: false,        // Used inside horizontal forms
};

export default Label;
