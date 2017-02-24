import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Checkbox = ({ className, children, disabled, ...props }) =>
  <label className={classNames('checkbox', { 'is-disabled': disabled })}>
    <input
      className={classNames('checkbox', className)}
      disabled={disabled}
      type="checkbox"
      {...props}
    />
    {children}
  </label>;

Checkbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  className: null,
  children: null,
  disabled: false,
};

export default Checkbox;
