import React from 'react';
import classNames from 'classnames';

const PanelTab = ({ className, active, ...props }) =>
  <a className={classNames(className, { 'is-active': active })} {...props} />;

export default PanelTab;
