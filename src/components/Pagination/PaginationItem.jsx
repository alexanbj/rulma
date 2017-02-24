import React, { PropTypes } from 'react';
import classNames from 'classnames';

const PaginationItem = ({ active, children, className, disabled, ellipsis, ...props }) => {
  if (ellipsis) {
    return (
      <li>
        <span className={classNames('pagination-ellipsis', className)}>
          &hellip;
        </span>
      </li>
    );
  }

  const child = React.Children.only(children);
  const classes = classNames('pagination-link', className, child.props.className, {
    'is-current': active,
    'is-disabled': disabled,
  });

  return (
    <li>
      {React.cloneElement(child, { className: classes, ...props })}
    </li>
  );
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  ellipsis: PropTypes.bool,
};

PaginationItem.defaultProps = {
  active: false,
  children: null,
  className: null,
  disabled: false,
  ellipsis: false,
};

export default PaginationItem;
