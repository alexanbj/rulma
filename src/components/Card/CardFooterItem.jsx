import React from 'react';
import PropTypes from 'prop-types';

import modifiers from '../../modifiers';

const CardFooterItem = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = modifiers(props, 'card-footer-item');
  return <ElementType className={classes} {...restProps} />;
};

CardFooterItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardFooterItem.defaultProps = {
  as: 'div',
  className: null,
};

export default CardFooterItem;
