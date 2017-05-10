import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationPrev = ({ as: ElementType, className, ...props }) => {
  const classes = classNames('pagination-previous', className);

  return <ElementType className={classes} {...props} />;
};

PaginationPrev.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
};

PaginationPrev.defaultProps = {
  as: 'a',
  className: null,
  disabled: false,
  href: null,
};

export default PaginationPrev;
