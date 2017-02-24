import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Radio = ({ className, disabled, ...props }) =>
  <label className={classNames('radio', { 'is-disabled': disabled })}>
    <input
      className={classNames('radio', className)}
      disabled={disabled}
      type="radio"
      {...props}
    />
    {props.children}
  </label>;

Radio.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  className: null,
  children: null,
  disabled: false,
};

export default Radio;
