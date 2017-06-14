import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuLabel = ({ as: ElementType, className, ...props }) =>
  <ElementType className={classNames('menu-label', className)} {...props} />;

MenuLabel.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

MenuLabel.defaultProps = {
  as: 'p',
  className: null,
};

export default MenuLabel;
