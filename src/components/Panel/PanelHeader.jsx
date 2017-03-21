import React, { PropTypes } from 'react';
import classNames from 'classnames';

const PanelHeader = ({ className, ...props }) =>
  <p className={classNames(className, 'panel-heading')} {...props} />;

PanelHeader.propTypes = {
  className: PropTypes.string,
};

PanelHeader.defaultProps = {
  className: null,
};
export default PanelHeader;
