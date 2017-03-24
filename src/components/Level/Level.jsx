import React, { PropTypes } from 'react';
import classNames from 'classnames';

import LevelLeft from './LevelLeft';
import LevelRight from './LevelRight';
import LevelItem from './LevelItem';

const Level = ({ className, mobile, tag: Tag, ...props }) => {
  const classes = classNames('level', className, {
    'is-mobile': mobile,
  });

  return (
    <Tag className={classes} {...props} />
  );
};

Level.propTypes = {
  className: PropTypes.string,
  mobile: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Level.defaultProps = {
  className: null,
  mobile: false,
  tag: 'div',
};

// Add the sub components to the top level export for ease of use
Level.Left = LevelLeft;
Level.Right = LevelRight;
Level.Item = LevelItem;

export default Level;
