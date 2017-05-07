import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelTabs = ({ className, tag: Tag, ...props }) => (
  <Tag className={classNames('panel-tabs', className)} {...props} />
);

PanelTabs.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PanelTabs.defaultProps = {
  className: null,
  tag: 'div',
};

export default PanelTabs;
