import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Label = ({ className, ...props }) =>
  <label className={classNames('label', className)} {...props} />;

Label.propTypes = {
  className: PropTypes.string,
};

Label.defaultProps = {
  className: null,
};

export default Label;
