import React, { PropTypes } from 'react';

import classNames from '../../modifiers';

const CardFooterItem = ({ children, ...props }) => {
  const child = React.Children.only(children);

  const [classes, restProps] = classNames(props, 'card-footer-item', child.props.className);

  return React.cloneElement(child, { className: classes, ...restProps });
};

CardFooterItem.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardFooterItem;
