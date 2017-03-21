import React, { PropTypes } from 'react';
import classNames from 'classnames';

const PanelBlockAnchor = ({ className, active, ...props }) => {
  const classes = classNames('panel-block', className, { 'is-active': active });
  return (<a className={classes} {...props} />);
};
PanelBlockAnchor.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};

PanelBlockAnchor.defaultProps = {
  className: null,
  active: false,
};
export default PanelBlockAnchor;
