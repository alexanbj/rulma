import React from 'react';
import classNames from 'classnames';

const PanelBlockAnchor = ({ className, active, ...props }) => {
  const classes = classNames('panel-block', className, {'is-active': active});
  return (<a className={classes} {...props} />);
};

const PanelBlockLabel = ({ className, ...props }) =>
  <label className={classNames("panel-block", className)} {...props} />;

const PanelBlock = ({ className, ...props }) =>
  <div className={classNames(className, "panel-block")} {...props} />;

PanelBlock.Anchor = PanelBlockAnchor;
PanelBlock.Label = PanelBlockLabel;
export default PanelBlock;
