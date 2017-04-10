import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Control from '../../control';

const Checkbox = ({ children, className, disabled, id, noControl, ...props }) => {
  const checkbox = (
    <label className={classNames('checkbox', { 'is-disabled': disabled })} htmlFor={id}>
      <input className={className} disabled={disabled} id={id} type="checkbox" {...props} />
      {children}
    </label>
  );

  if (!noControl) {
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
  disabled: PropTypes.bool,
  id: PropTypes.string, // Will be set as the id on the checkbox and as htmlFor on the label
  noControl: PropTypes.bool, // Don't wrap the checkbox with a control container
};

Checkbox.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  id: null,
  noControl: false,
};

export default Checkbox;
