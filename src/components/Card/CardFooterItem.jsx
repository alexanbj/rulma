import React from 'react';
import PropTypes from 'prop-types';

import modifiers from '../../modifiers';

const CardFooterItem = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'card-footer-item');
  return <Tag className={classes} {...restProps} />;
};

CardFooterItem.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CardFooterItem.defaultProps = {
  className: null,
  tag: 'div',
};

export default CardFooterItem;
