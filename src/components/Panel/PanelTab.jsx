import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelTab = ({ as: ElementType, active, className, ...props }) => {
  const classes = classNames(className, { 'is-active': active });
  return <ElementType className={classes} {...props} />;
};

PanelTab.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
};

PanelTab.defaultProps = {
  as: 'a',
  active: false,
  className: null,
  href: null,
};

export default PanelTab;
