import React, { PropTypes } from 'react';

import modifiers from '../../modifiers';

const CardFooterItem = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'card-footer-item');
  return <Tag className={classes} {...restProps} />;
};

CardFooterItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CardFooterItem.defaultProps = {
  tag: 'div',
};

export default CardFooterItem;
