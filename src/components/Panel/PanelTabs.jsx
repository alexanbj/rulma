import React from 'react';
import classNames from 'classnames';

const PanelTabs = ({ className, ...props }) =>
  <p className={classNames(className, "panel-tabs")} {...props} />;

export default PanelTabs;
