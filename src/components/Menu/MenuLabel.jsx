import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuLabel = ({ className, tag: Tag, ...props }) => (
  <Tag className={classNames('menu-label', className)} {...props} />
);

MenuLabel.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

MenuLabel.defaultProps = {
  className: null,
  tag: 'p',
};

export default MenuLabel;
