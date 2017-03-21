import React, { PropTypes } from 'react';
import classNames from 'classnames';

const PanelTabs = ({ className, ...props }) =>
  <p className={classNames(className, 'panel-tabs')} {...props} />;

PanelTabs.propTypes = {
  className: PropTypes.string,
};

PanelTabs.defaultProps = {
  className: null,
};
export default PanelTabs;
