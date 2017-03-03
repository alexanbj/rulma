import React from 'react';
import classNames from 'classnames';

const PanelHeader = ({className, ...props}) =>
  <p className={classNames(className, "panel-heading")} {...props} />;

  export default PanelHeader;
