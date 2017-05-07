import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelHeading = ({ className, tag: Tag, ...props }) => (
  <Tag className={classNames('panel-heading', className)} {...props} />
);

PanelHeading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PanelHeading.defaultProps = {
  className: null,
  tag: 'div',
};

export default PanelHeading;
