import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardTitle from './CardTitle';
import CardHeaderIcon from './CardHeaderIcon';

const CardHeader = ({ children, className, tag: Tag, title, ...props }) => {
  const classes = classNames('card-header', className);
  return (
    <Tag className={classes} {...props}>
      {title ? [<CardTitle key="title">{title}</CardTitle>, children] : children}
    </Tag>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  title: PropTypes.node, // The title/heading of the Card
};

CardHeader.defaultProps = {
  children: null,
  className: null,
  tag: 'div',
  title: null,
};

CardHeader.Icon = CardHeaderIcon;

export default CardHeader;
