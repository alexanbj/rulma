import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Subtitle = ({ className, level, ...props }) => {
  const classes = classNames(`subtitle is-${level}`, className);
  return (
    <p className={classes} {...props} />
  );
};

Subtitle.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
};

Subtitle.defaultProps = {
  className: null,
  level: '5',
};


export default Subtitle;
