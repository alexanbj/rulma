import React, { PropTypes } from 'react';

const MenuSubList = ({ ...props }) =>
  <ul {...props} />;

MenuSubList.propTypes = {
  className: PropTypes.string,
};

MenuSubList.defaultProps = {
  className: null,
};

export default MenuSubList;
