import React, { PropTypes } from 'react';
import classNames from 'classnames';

import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardContent from './CardContent';

const Card = ({ className, ...props }) => {
  const classes = classNames('card', className);
  return <div className={classes} {...props} />;
};

Card.propTypes = {
  className: PropTypes.string,
};

Card.defaultProps = {
  className: null,
};

// Add the sub components to the top level export for ease of use
Card.Image = CardImage;
Card.Title = CardTitle;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Content = CardContent;

export default Card;
