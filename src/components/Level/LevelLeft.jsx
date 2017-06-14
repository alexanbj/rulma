import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LevelLeft = ({ as: ElementType, className, ...props }) =>
  <ElementType className={classNames('level-left', className)} {...props} />;

LevelLeft.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

LevelLeft.defaultProps = {
  as: 'div',
  className: null,
};

export default LevelLeft;
