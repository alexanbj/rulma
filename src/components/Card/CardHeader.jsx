import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardTitle from './CardTitle';
import CardHeaderIcon from './CardHeaderIcon';

const CardHeader = ({ as: ElementType, children, className, title, ...props }) => {
  const classes = classNames('card-header', className);
  return (
    <ElementType className={classes} {...props}>
      {title ? [<CardTitle key="title">{title}</CardTitle>, children] : children}
    </ElementType>
  );
};

CardHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.node, // The title/heading of the Card
};

CardHeader.defaultProps = {
  as: 'div',
  children: null,
  className: null,
  title: null,
};

CardHeader.Icon = CardHeaderIcon;

export default CardHeader;
