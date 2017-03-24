import React, { PropTypes } from 'react';
import modifiers from '../../modifiers';

const Subtitle = ({ size, spaced, tag, ...props }) => {
  const [classes, restProps] = modifiers(props, `subtitle is-${size}`, {
    'is-spaced': spaced,
  });

  const Tag = tag === 'h' ? `${tag}${size}` : tag;

  return <Tag className={classes} {...restProps} />;
};

Subtitle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', 1, 2, 3, 4, 5, 6]),
  spaced: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Subtitle.defaultProps = {
  className: null,
  size: '5',
  spaced: false,
  tag: 'h',
};

export default Subtitle;
