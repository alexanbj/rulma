import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tr = ({ className, selected, ...props }) => {
  const classes = classNames(className, {
    'is-selected': selected,
  });

  return <tr className={classes} {...props} />;
};

Tr.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool, // Set the table row as selected
};

Tr.defaultProps = {
  className: null,
  selected: false,
};

export default Tr;
