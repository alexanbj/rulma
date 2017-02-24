import React, { PropTypes } from 'react';
import classNames, { modifierPropTypes } from '../../modifiers';

const Table = ({ bordered, narrow, striped, ...props }) => {
  const [classes, restProps] = classNames(props, 'table', {
    'is-bordered': bordered,
    'is-narrow': narrow,
    'is-striped': striped,
  });

  return (
    <table className={classes} {...restProps} />
  );
};

Table.propTypes = {
  bordered: PropTypes.bool,
  ...modifierPropTypes,
  striped: PropTypes.bool,
  narrow: PropTypes.bool,
};

Table.defaultProps = {
  bordered: false,
  striped: false,
  narrow: false,
};

export default Table;
