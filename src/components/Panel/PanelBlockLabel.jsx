import React, { PropTypes } from 'react';
import classNames from 'classnames';

const PanelBlockLabel = ({ className, htmlFor, ...props }) =>
  <label className={classNames('panel-block', className)} htmlFor={htmlFor} {...props} />;

PanelBlockLabel.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};

PanelBlockLabel.defaultProps = {
  className: null,
  htmlFor: null,
};
export default PanelBlockLabel;
