import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardFooterItem from './CardFooterItem';

const CardFooter = ({ as: ElementType, className, ...props }) => {
  const classes = classNames('card-footer', className);
  return <ElementType className={classes} {...props} />;
};

CardFooter.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardFooter.defaultProps = {
  as: 'div',
  className: null,
};

CardFooter.Item = CardFooterItem;

export default CardFooter;
