import React from 'react';
import PropTypes from 'prop-types';
import modifiers from '../../modifiers';

const Title = ({ as, size, spaced, ...props }) => {
  const [classes, restProps] = modifiers(props, `title is-${size}`, {
    'is-spaced': spaced,
  });

  const ElementType = as === 'h' ? `${as}${size}` : as;

  return <ElementType className={classes} {...restProps} />;
};

Title.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', 1, 2, 3, 4, 5, 6]),
  spaced: PropTypes.bool,
};

Title.defaultProps = {
  as: 'h',
  className: null,
  size: '3',
  spaced: false,
};

export default Title;
