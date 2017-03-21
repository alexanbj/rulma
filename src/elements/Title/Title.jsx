import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Title = ({ className, size, spaced, tag, ...props }) => {
  const classes = classNames(
    `title is-${size}`,
    className,
    {
      'is-spaced': spaced,
    },
  );

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
  spaced: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Title.defaultProps = {
  className: null,
  size: '3',
  spaced: false,
  tag: 'h',
};


export default Title;
