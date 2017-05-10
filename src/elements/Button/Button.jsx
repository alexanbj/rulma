import React from 'react';
import PropTypes from 'prop-types';
import blacklist from 'blacklist';

import Control from '../../control';
import modifiers, { sizePropType, colorPropType } from '../../modifiers';

const Button = ({
  as,
  active,
  control,
  expanded,
  fullWidth,
  inverted,
  loading,
  outlined,
  ...props
}) => {
  // eslint-disable-next-line prefer-const
  let [classes, restProps] = modifiers(props, 'button', {
    'is-active': active,
    'is-inverted': inverted,
    'is-loading': loading,
    'is-outlined': outlined,
    'is-fullwidth': fullWidth,
  });

  const ElementType = Object.prototype.hasOwnProperty.call(restProps, 'href') && as === 'button'
    ? 'a'
    : as;

  // The bold assumption that everything that isn't a button should have the type prop removed
  if (ElementType !== 'button') {
    restProps = blacklist(restProps, 'type');
  }

  const button = <ElementType className={classes} {...restProps} />;

  if (control) {
    return (
      <Control expanded={expanded}>
        {button}
      </Control>
    );
  }

  return button;
};

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
  color: colorPropType,
  control: PropTypes.bool, // Wraps the button in a <Control />
  expanded: PropTypes.bool, // When within addons and groups
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  href: PropTypes.string,
  inverted: PropTypes.bool,
  loading: PropTypes.bool,
  outlined: PropTypes.bool,
  size: sizePropType,
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'menu']).isRequired,
};

Button.defaultProps = {
  as: 'button',
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
