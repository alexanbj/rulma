import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = ({ active, className, ...props }) => {
  const classes = classNames(className, {
    'is-active': active,
  });
  return <li className={classes} {...props} />;
};

Tab.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
};

Tab.defaultProps = {
  active: false,
  className: null,
};

export default Tab;
