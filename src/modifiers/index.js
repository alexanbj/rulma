import { PropTypes } from 'react';
import classNames from 'classnames';
import { omit } from 'lodash';

export const colorPropType = PropTypes.oneOf([
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'dark',
  'white',
  'light',
  'black',
  'link',
]);

export const sizePropType = PropTypes.oneOf([
  'small',
  'medium',
  'large',
]);

export const modifierPropTypes = {
  className: PropTypes.string,
  marginLess: PropTypes.bool,
  paddingLess: PropTypes.bool,
  pullRight: PropTypes.bool,
  textCentered: PropTypes.bool,
  textLeft: PropTypes.bool,
  textRight: PropTypes.bool,
};

/**
* Given a set of props, apply Bulma specific classes for those props.
* Also pass everything else to classNames
* Will return an updated props, with bulma specific properties removed
*/
export default function bulmaClassNames(props, ...args) {
  return [
    classNames(props.className, args, {
      'is-marginless': props.marginLess,
      'is-paddingless': props.paddingLess,
      'has-text-left': props.textLeft,
      'has-text-right': props.textRight,
      'has-text-centered': props.textCentered,
      'is-pulled-right': props.pullRight,
      [`is-${props.color}`]: props.color,
      [`is-${props.size}`]: props.size,
    }),
    omit(props, [
      'className',
      'color',
      'size',
      'marginLess',
      'paddingLess',
      'textLeft',
      'textRight',
      'textCentered',
      'pullRight',
    ]),
  ];
}
