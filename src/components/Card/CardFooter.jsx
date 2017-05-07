import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardFooterItem from './CardFooterItem';

const CardFooter = ({ className, tag: Tag, ...props }) => {
  const classes = classNames('card-footer', className);
  return <Tag className={classes} {...props} />;
};

CardFooter.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CardFooter.defaultProps = {
  className: null,
  tag: 'div',
};

CardFooter.Item = CardFooterItem;

export default CardFooter;
