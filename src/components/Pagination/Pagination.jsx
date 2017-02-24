import React, { PropTypes } from 'react';
import classNames from 'classnames';

import PaginationItem from './PaginationItem';
import PaginationPrev from './PaginationPrev';
import PaginationNext from './PaginationNext';

const Pagination = ({ centered, children, className, next, prev, right, ...props }) => {
  const classes = classNames('pagination', className, {
    'is-right': right,
    'is-centered': centered,
  });

  return (
    <nav className={classes} {...props}>
      {prev}
      {next}
      <ul className="pagination-list">
        {children}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  centered: PropTypes.bool,
  next: PropTypes.element,
  prev: PropTypes.element,
  right: PropTypes.bool,
};

Pagination.defaultProps = {
  className: null,
  children: null,
  centered: false,
  next: null,
  prev: null,
  right: false,
};

Pagination.Prev = PaginationPrev;
Pagination.Next = PaginationNext;
Pagination.Item = PaginationItem;

export default Pagination;
