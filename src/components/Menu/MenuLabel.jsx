import React, { PropTypes } from 'react';
import classNames from 'classnames';

const MenuLabel = ({ className, ...props }) =>
  <p className={classNames('menu-label', className)} {...props} />;

MenuLabel.propTypes = {
  className: PropTypes.string,
};

MenuLabel.defaultProps = {
  className: null,
};

export default MenuLabel;
