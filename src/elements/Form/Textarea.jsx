import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Textarea = ({ className, ...props }) =>
  <textarea className={classNames('textarea', className)} {...props} />;

Textarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Textarea.defaultProps = {
  className: null,
  placeholder: null,
};

export default Textarea;
