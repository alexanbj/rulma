import React, { PropTypes } from 'react';

import classNames from '../../modifiers';

// Map for our size props againt Bulma's CSS classes
const sizes = new Map([
  ['3/4', 'three-quarters'],
  ['2/3', 'two-thirds'],
  ['1/2', 'half'],
  ['1/3', 'one-third'],
  ['1/4', 'one-quarter'],
]);

const Column = ({ cols, narrow, offsetCols, size, offsetSize, desktopSize, tabletSize, mobileSize, ...props }) => {
  // TODO: Narrow for different viewports
  const [classes, restProps] = classNames(props, 'column', {
    [`is-${cols}`]: cols,
    [`is-offset-${offsetCols}`]: offsetCols,

    [`is-${sizes.get(size)}`]: size,
    [`is-${sizes.get(desktopSize)}-desktop`]: desktopSize,
    [`is-${sizes.get(tabletSize)}-tablet`]: tabletSize,
    [`is-${sizes.get(mobileSize)}-mobile`]: mobileSize,
    [`is-offset-${sizes.get(offsetSize)}`]: offsetSize,

    'is-narrow': narrow,
  });

  return (
    <div className={classes} {...restProps} />
  );
};

const sizeProp = PropTypes.oneOf(['3/4', '2/3', '1/2', '1/3', '1/4']);
const colsProp = PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);

Column.propTypes = {
  cols: colsProp,
  offsetCols: colsProp,

  // TODO: Narrow for different viewports
  narrow: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['mobile', 'tablet', 'dekstop']),
  ]),

  size: sizeProp,
  offsetSize: sizeProp,
  desktopSize: sizeProp,
  tabletSize: sizeProp,
  mobileSize: sizeProp,
};

Column.defaultProps = {
  cols: null,
  offsetCols: null,

  narrow: false,

  size: null,
  offsetSize: null,
  desktopSize: null,
  tabletSize: null,
  mobileSize: null,
};

export default Column;
