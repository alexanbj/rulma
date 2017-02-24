import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Title = ({ className, level, ...props }) => {
  const classes = classNames(`title is-${level}`, className);
  return (
    <p className={classes} {...props} />
  );
};

Title.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
};

Title.defaultProps = {
  className: null,
  level: '3',
};


export default Title;
