import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelTab = ({ active, className, tag: Tag, ...props }) => {
  const classes = classNames(className, { 'is-active': active });
  return <Tag className={classes} {...props} />;
};

PanelTab.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PanelTab.defaultProps = {
  active: false,
  className: null,
  href: null,
  tag: 'a',
};

export default PanelTab;
