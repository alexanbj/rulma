import React from 'react';
import PropTypes from 'prop-types';
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
