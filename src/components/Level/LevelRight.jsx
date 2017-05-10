import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LevelRight = ({ as: ElementType, className, ...props }) => (
  <ElementType className={classNames('level-right', className)} {...props} />
);

LevelRight.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

LevelRight.defaultProps = {
  as: 'div',
  className: null,
};

export default LevelRight;
