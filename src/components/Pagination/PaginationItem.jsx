import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationItem = ({ active, children, className, disabled, ellipsis, ...props }) => {
  if (ellipsis) {
    return (
      <li>
        <span className={classNames('pagination-ellipsis', className)}>
          …
        </span>
      </li>
    );
  }

  const child = React.Children.only(children);
  const classes = classNames('pagination-link', className, child.props.className, {
    'is-current': active,
  });

  return (
    <li>
      {React.cloneElement(child, { className: classes, disabled, ...props })}
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
