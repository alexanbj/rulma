import React from 'react';
import PropTypes from 'prop-types';
import classNames, { modifierPropTypes } from '../../modifiers';

const Table = ({ bordered, narrow, striped, ...props }) => {
  const [classes, restProps] = classNames(props, 'table', {
    'is-bordered': bordered,
    'is-narrow': narrow,
    'is-striped': striped,
  });

  return <table className={classes} {...restProps} />;
};

Table.propTypes = {
  bordered: PropTypes.bool, // Add borders to the cells
  className: PropTypes.string,
  ...modifierPropTypes,
  striped: PropTypes.bool, // Add stripes to the table
  narrow: PropTypes.bool, // Make the cells narrower
};

Table.defaultProps = {
  bordered: false,
  className: null,
  striped: false,
  narrow: false,
};

export default Table;
