import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationNext = ({ as: ElementType, className, ...props }) => {
  const classes = classNames('pagination-next', className);
  return <ElementType className={classes} {...props} />;
};

PaginationNext.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
};

PaginationNext.defaultProps = {
  as: 'a',
  className: null,
  disabled: false,
  href: null,
};

export default PaginationNext;
