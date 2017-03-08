import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Radio = ({ children, className, disabled, id, ...props }) => (
  <label
    className={classNames('radio', { 'is-disabled': disabled })}
    htmlFor={id}
  >
    <input
      className={className}
      disabled={disabled}
      id={id}
      type="radio"
      {...props}
    />
    {children}
  </label>
);

Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,        // Will be set as the id on the checkbox and as htmlFor on the label
};

Radio.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  id: null,
};

export default Radio;
