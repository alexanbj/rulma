import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationItem = ({ as: ElementType, active, className, disabled, ellipsis, ...props }) => {
  if (ellipsis) {
    return (
      <li>
        <span className={classNames('pagination-ellipsis', className)}>
          …
        </span>
      </li>
    );
  }

  const classes = classNames('pagination-link', className, {
    'is-current': active,
  });

  return (
    <li>
      <ElementType className={classes} disabled={disabled} {...props} />
    </li>
  );
};

PaginationItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  ellipsis: PropTypes.bool,
  href: PropTypes.string,
};

PaginationItem.defaultProps = {
  as: 'a',
  active: false,
  className: null,
  disabled: false,
  ellipsis: false,
  href: null,
};

export default PaginationItem;
