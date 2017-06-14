import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelHeading = ({ as: ElementType, className, ...props }) =>
  <ElementType className={classNames('panel-heading', className)} {...props} />;

PanelHeading.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

PanelHeading.defaultProps = {
  as: 'div',
  className: null,
};

export default PanelHeading;
