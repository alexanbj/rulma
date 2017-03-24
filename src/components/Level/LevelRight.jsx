import React, { PropTypes } from 'react';
import classNames from 'classnames';

const LevelRight = ({ className, ...props }) => (
  <div className={classNames('level-right', className)} {...props} />
);

LevelRight.propTypes = {
  className: PropTypes.string,
};

LevelRight.defaultProps = {
  className: null,
};

export default LevelRight;
