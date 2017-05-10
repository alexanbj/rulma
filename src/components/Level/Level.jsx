import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LevelLeft from './LevelLeft';
import LevelRight from './LevelRight';
import LevelItem from './LevelItem';

const Level = ({ as: ElementType, className, mobile, ...props }) => {
  const classes = classNames('level', className, {
    'is-mobile': mobile,
  });

  return <ElementType className={classes} {...props} />;
};

Level.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  mobile: PropTypes.bool,
};

Level.defaultProps = {
  as: 'div',
  className: null,
  mobile: false,
};

// Add the sub components to the top level export for ease of use
Level.Left = LevelLeft;
Level.Right = LevelRight;
Level.Item = LevelItem;

export default Level;
