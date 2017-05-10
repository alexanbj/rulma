import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { sizePropType } from '../../modifiers/';

import PaginationItem from './PaginationItem';
import PaginationPrev from './PaginationPrev';
import PaginationNext from './PaginationNext';

const Pagination = ({ as: ElementType, centered, children, next, prev, right, ...props }) => {
  const [classes, restProps] = modifiers(props, 'pagination', {
    'is-right': right,
    'is-centered': centered,
  });

  return (
    <ElementType className={classes} {...restProps}>
      {prev}
      {next}
      <ul className="pagination-list">
        {children}
      </ul>
    </ElementType>
  );
};

Pagination.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  centered: PropTypes.bool,
  next: PropTypes.element,
  prev: PropTypes.element,
  right: PropTypes.bool,
  size: sizePropType,
};

Pagination.defaultProps = {
  as: 'nav',
  className: null,
  children: null,
  centered: false,
  next: null,
  prev: null,
  right: false,
  size: null,
};

Pagination.Prev = PaginationPrev;
Pagination.Next = PaginationNext;
Pagination.Item = PaginationItem;

export default Pagination;
