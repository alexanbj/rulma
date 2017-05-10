import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

// Map for our size props againt Bulma's CSS classes
const sizes = new Map([
  ['3/4', 'three-quarters'],
  ['2/3', 'two-thirds'],
  ['1/2', 'half'],
  ['1/3', 'one-third'],
  ['1/4', 'one-quarter'],
]);

const Column = ({
  size,
  mobile,
  tablet,
  desktop,
  widescreen,
  offset,
  mobileOffset,
  tabletOffset,
  desktopOffset,
  widescreenOffset,
  narrow,
  mobileNarrow,
  tabletNarrow,
  desktopNarrow,
  widescreenNarrow,
  full,
  mobileFull,
  tabletFull,
  desktopFull,
  widescreenFull,
  tag: Tag,
  ...props
}) => {
  const [classes, restProps] = classNames(props, 'column', {
    [`is-${sizes.get(size) || size}`]: size,

    [`is-${sizes.get(mobile) || mobile}-mobile`]: mobile,
    [`is-${sizes.get(tablet) || tablet}-tablet`]: tablet,
    [`is-${sizes.get(desktop) || desktop}-desktop`]: desktop,
    [`is-${sizes.get(widescreen) || widescreen}-widescreen`]: widescreen,

    [`is-offset-${sizes.get(offset) || offset}`]: offset,
    [`is-offset-${sizes.get(mobileOffset) || mobileOffset}-mobile`]: mobileOffset,
    [`is-offset-${sizes.get(tabletOffset) || tabletOffset}-tablet`]: tabletOffset,
    [`is-offset-${sizes.get(desktopOffset) || desktopOffset}-desktop`]: desktopOffset,
    [`is-offset-${sizes.get(widescreenOffset) || widescreenOffset}-widescreen`]: widescreenOffset,

    'is-narrow': narrow,
    'is-narrow-mobile': mobileNarrow,
    'is-narrow-tablet': tabletNarrow,
    'is-narrow-desktop': desktopNarrow,
    'is-narrow-widescreen': widescreenNarrow,

    'is-full': full,
    'is-full-mobile': mobileFull,
    'is-full-tablet': tabletFull,
    'is-full-desktop': desktopFull,
    'is-full-widescreen': widescreenFull,
  });

  return <Tag className={classes} {...restProps} />;
};

const sizeProp = PropTypes.oneOf([
  '3/4',
  '2/3',
  '1/2',
  '1/3',
  '1/4',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
]);

Column.propTypes = {
  size: sizeProp,
  mobile: sizeProp,
  tablet: sizeProp,
  desktop: sizeProp,
  widescreen: sizeProp,

  offset: sizeProp,
  mobileOffset: sizeProp,
  tabletOffset: sizeProp,
  desktopOffset: sizeProp,
  widescreenOffset: sizeProp,

  narrow: PropTypes.bool,
  mobileNarrow: PropTypes.bool,
  tabletNarrow: PropTypes.bool,
  desktopNarrow: PropTypes.bool,
  widescreenNarrow: PropTypes.bool,

  full: PropTypes.bool,
  mobileFull: PropTypes.bool,
  tabletFull: PropTypes.bool,
  desktopFull: PropTypes.bool,
  widescreenFull: PropTypes.bool,

  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Column.defaultProps = {
  size: null,
  mobile: null,
  tablet: null,
  desktop: null,
  widescreen: null,

  offset: null,
  mobileOffset: null,
  tabletOffset: null,
  desktopOffset: null,
  widescreenOffset: null,

  narrow: false,
  mobileNarrow: false,
  tabletNarrow: false,
  desktopNarrow: false,
  widescreenNarrow: false,

  full: false,
  mobileFull: false,
  tabletFull: false,
  desktopFull: false,
  widescreenFull: false,

  tag: 'div',
};

export default Column;
