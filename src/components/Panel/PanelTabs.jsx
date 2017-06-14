import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelTabs = ({ as: ElementType, className, ...props }) =>
  <ElementType className={classNames('panel-tabs', className)} {...props} />;

PanelTabs.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

PanelTabs.defaultProps = {
  as: 'div',
  className: null,
};

export default PanelTabs;
