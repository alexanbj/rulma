import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardContent from './CardContent';

const Card = ({ as: ElementType, className, ...props }) => {
  const classes = classNames('card', className);
  return <ElementType className={classes} {...props} />;
};

Card.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

Card.defaultProps = {
  as: 'div',
  className: null,
};

// Add the sub components to the top level export for ease of use
Card.Image = CardImage;
Card.Title = CardTitle;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Content = CardContent;

export default Card;
