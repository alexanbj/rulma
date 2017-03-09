import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Title = ({ className, size, tag, ...props }) => {
  const classes = classNames(`title is-${size}`, className);
  const Tag = tag === 'h' ? `${tag}${size}` : tag;
  return (
    <Tag className={classes} {...props} />
  );
};

Title.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf([
    '1', '2', '3', '4', '5', '6',
    1, 2, 3, 4, 5, 6,
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Title.defaultProps = {
  className: null,
  size: '3',
  tag: 'h',
};


export default Title;
