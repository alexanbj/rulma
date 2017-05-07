import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardContent from './CardContent';

const Card = ({ className, tag: Tag, ...props }) => {
  const classes = classNames('card', className);
  return <Tag className={classes} {...props} />;
};

Card.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Card.defaultProps = {
  className: null,
  tag: 'div',
};

// Add the sub components to the top level export for ease of use
Card.Image = CardImage;
Card.Title = CardTitle;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Content = CardContent;

export default Card;
