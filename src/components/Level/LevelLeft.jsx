import React, { PropTypes } from 'react';
import classNames from 'classnames';

const LevelLeft = ({ className, ...props }) => (
  <div className={classNames('level-left', className)} {...props} />
);

LevelLeft.propTypes = {
  className: PropTypes.string,
};

LevelLeft.defaultProps = {
  className: null,
};

export default LevelLeft;
