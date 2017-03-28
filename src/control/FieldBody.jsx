import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Used within <Field horizontal />
 */
const FieldBody = ({ className, ...props }) => (
  <div className={classNames('field-body', className)} {...props} />
);

FieldBody.propTypes = {
  className: PropTypes.string,
};

FieldBody.defaultProps = {
  className: null,
};

export default FieldBody;
