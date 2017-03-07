import React, { PropTypes } from 'react';

import Control from '../../control/Control';
import classNames, { sizePropType, colorPropType } from '../../modifiers';


const Button = ({
    active, control, expanded, fullWidth, inverted, loading, outlined, ...props
  }) => {
  const [classes, restProps] = classNames(props, 'button', {
    'is-active': active,
    'is-expanded': expanded,
    'is-inverted': inverted,
    'is-loading': loading,
    'is-outlined': outlined,
    'is-fullwidth': fullWidth,
  });
  const button = (
    <button className={classes} {...restProps} />
  );

  if (control) {
    return (
      <Control>
        {button}
      </Control>
    );
  }

  return button;
};

Button.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  color: colorPropType,
  control: PropTypes.bool,            // Wraps the button in a <Control />
  expanded: PropTypes.bool,           // Within addons and groups
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  loading: PropTypes.bool,
  outlined: PropTypes.bool,
  size: sizePropType,
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
    'menu',
  ]).isRequired,
};

Button.defaultProps = {
  active: false,
  className: null,
  color: null,
  control: false,
  disabled: false,
  expanded: false,
  fullWidth: false,
  inverted: false,
  loading: false,
  outlined: false,
  size: null,
  type: 'button',
};

export default Button;
