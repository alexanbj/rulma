import React, { PropTypes } from 'react';
import classNames from 'classnames';

import CardFooterItem from './CardFooterItem';

const CardFooter = ({ className, ...props }) => {
  const classes = classNames('card-footer', className);
  return <footer className={classes} {...props} />;
};

CardFooter.propTypes = {
  className: PropTypes.string,
};

CardFooter.defaultProps = {
  className: null,
};

CardFooter.Item = CardFooterItem;

export default CardFooter;
