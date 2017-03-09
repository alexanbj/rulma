import React, { PropTypes } from 'react';
import classNames from 'classnames';

/* eslint-disable jsx-a11y/label-has-for */
const Label = ({ className, control, ...props }) => {
  const label = (
    <label className={classNames('label', className)} {...props} />
  );

  if (control) {
    return (
      <div className="control-label">{label}</div>
    );
  }

  return label;
};

Label.propTypes = {
  className: PropTypes.string,
  control: PropTypes.bool,
};

Label.defaultProps = {
  className: null,
  control: false,        // Turns the label into a side label in horizontal forms
};

export default Label;
