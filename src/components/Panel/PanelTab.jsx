import React, { PropTypes } from 'react';
import classNames from 'classnames';

const PanelTab = ({ className, active, ...props }) =>
  <a className={classNames(className, { 'is-active': active })} {...props} />;

PanelTab.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};

PanelTab.defaultProps = {
  className: null,
  active: false,
};
export default PanelTab;
