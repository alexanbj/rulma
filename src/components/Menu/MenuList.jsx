import React, { PropTypes } from 'react';
import classNames from 'classnames';

const MenuList = ({ className, ...props }) =>
  <ul className={classNames('menu-list', className)} {...props} />;

MenuList.propTypes = {
  className: PropTypes.string,
};

MenuList.defaultProps = {
  className: null,
};

export default MenuList;
