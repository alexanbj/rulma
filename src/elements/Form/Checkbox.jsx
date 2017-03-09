import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Control from '../../control';

const Checkbox = ({ children, className, control, disabled, id, ...props }) => {
  const checkbox = (
    <label
      className={classNames('checkbox', { 'is-disabled': disabled })}
      htmlFor={id}
    >
      <input
        className={className}
        disabled={disabled}
        id={id}
        type="checkbox"
        {...props}
      />
      {children}
    </label>
  );

  if (control) {
    return (
      <Control>
        {checkbox}
      </Control>
    );
  }

  return checkbox;
};

Checkbox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  control: PropTypes.bool,      // Wraps the Checkbox in a <Control />
  disabled: PropTypes.bool,
  id: PropTypes.string,         // Will be set as the id on the checkbox and as htmlFor on the label
};

Checkbox.defaultProps = {
  children: null,
  className: null,
  control: false,
  disabled: false,
  id: null,
};

export default Checkbox;
