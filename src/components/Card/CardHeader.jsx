import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardTitle from './CardTitle';
import CardHeaderIcon from './CardHeaderIcon';

const CardHeader = ({ children, className, title, ...props }) => {
  const classes = classNames('card-header', className);
  return (
    <header className={classes} {...props}>
      {title
        ? [<CardTitle key="title">{title}</CardTitle>, children]
        : children}
    </header>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.node, // The title/heading of the Card
};

CardHeader.defaultProps = {
  children: null,
  className: null,
  title: null,
};

CardHeader.Icon = CardHeaderIcon;

export default CardHeader;
