import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { sizePropType } from '../../modifiers/';

import PaginationItem from './PaginationItem';
import PaginationPrev from './PaginationPrev';
import PaginationNext from './PaginationNext';

const Pagination = ({ centered, children, next, prev, right, tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'pagination', {
    'is-right': right,
    'is-centered': centered,
  });

  return (
    <Tag className={classes} {...restProps}>
      {prev}
      {next}
      <ul className="pagination-list">
        {children}
      </ul>
    </Tag>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  centered: PropTypes.bool,
  next: PropTypes.element,
  prev: PropTypes.element,
  right: PropTypes.bool,
  size: sizePropType,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Pagination.defaultProps = {
  className: null,
  children: null,
  centered: false,
  next: null,
  prev: null,
  right: false,
  size: null,
  tag: 'nav',
};

Pagination.Prev = PaginationPrev;
Pagination.Next = PaginationNext;
Pagination.Item = PaginationItem;

export default Pagination;
