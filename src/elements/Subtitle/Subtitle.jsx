import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Subtitle = ({ className, size, tag, ...props }) => {
  const classes = classNames(`subtitle is-${size}`, className);
  const Tag = tag === 'h' ? `${tag}${size}` : tag;
  return (
    <Tag className={classes} {...props} />
  );
};

Subtitle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf([
    '1', '2', '3', '4', '5', '6',
    1, 2, 3, 4, 5, 6,
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Subtitle.defaultProps = {
  className: null,
  size: '5',
  tag: 'h',
};


export default Subtitle;
