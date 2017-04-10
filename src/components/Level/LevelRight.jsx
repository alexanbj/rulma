import React from 'react';
import PropTypes from 'prop-types';
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
