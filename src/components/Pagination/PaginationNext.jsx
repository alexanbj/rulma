import React, { PropTypes } from 'react';
import classNames from 'classnames';

const PaginationNext = ({ className, children, disabled, ...props }) => {
  const child = React.Children.only(children);
  const classes = classNames('pagination-next', className, child.props.className, {
    'is-disabled': disabled,
  });

  return React.cloneElement(child, { className: classes, ...props });
};

PaginationNext.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
};

PaginationNext.defaultProps = {
  className: null,
  disabled: false,
};

export default PaginationNext;
