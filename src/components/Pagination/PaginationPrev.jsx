import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationPrev = ({ className, children, disabled, ...props }) => {
  const child = React.Children.only(children);
  const classes = classNames('pagination-previous', className, child.props.className, {
    'is-disabled': disabled,
  });

  return React.cloneElement(child, { className: classes, ...props });
};

PaginationPrev.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
};

PaginationPrev.defaultProps = {
  className: null,
  disabled: false,
};

export default PaginationPrev;
