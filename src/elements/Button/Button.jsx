import React, { PropTypes } from 'react';

import classNames, { sizePropType, colorPropType } from '../../modifiers';


const Button = ({ active, fullWidth, inverted, loading, outlined, ...props }) => {
  const [classes, restProps] = classNames(props, 'button', {
    'is-active': active,
    'is-inverted': inverted,
    'is-loading': loading,
    'is-outlined': outlined,
    'is-fullwidth': fullWidth,
  });
  return (
    <button className={classes} {...restProps} />
  );
};

Button.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  color: colorPropType,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  loading: PropTypes.bool,
  outlined: PropTypes.bool,
  size: sizePropType,
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'menu']).isRequired,
};

Button.defaultProps = {
  active: false,
  className: null,
  color: null,
  disabled: false,
  fullWidth: false,
  inverted: false,
  loading: false,
  outlined: false,
  size: null,
  type: 'button',
};

export default Button;
