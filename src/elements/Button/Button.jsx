import React, { PropTypes } from 'react';
import blacklist from 'blacklist';

import Control from '../../control';
import modifiers, { sizePropType, colorPropType } from '../../modifiers';

const Button = (
  {
    active,
    control,
    expanded,
    fullWidth,
    inverted,
    loading,
    outlined,
    tag,
    ...props
  },
) => {
  // eslint-disable-next-line prefer-const
  let [classes, restProps] = modifiers(props, 'button', {
    'is-active': active,
    'is-inverted': inverted,
    'is-loading': loading,
    'is-outlined': outlined,
    'is-fullwidth': fullWidth,
  });

  const Tag = Object.prototype.hasOwnProperty.call(restProps, 'href') && tag === 'button'
    ? 'a'
    : tag;

  // The bold assumption that everything that isn't a button should have the type prop removed
  if (Tag !== 'button') {
    restProps = blacklist(restProps, 'type');
  }

  const button = <Tag className={classes} {...restProps} />;

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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'menu']).isRequired,
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
  tag: 'button',
  type: 'button',
};

export default Button;
