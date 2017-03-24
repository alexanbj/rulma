import React, { PropTypes } from 'react';
import classNames from 'classnames';

import CardHeaderIcon from './CardHeaderIcon';

const CardHeader = ({ className, ...props }) => {
  const classes = classNames('card-header', className);
  return <header className={classes} {...props} />;
};

CardHeader.propTypes = {
  className: PropTypes.string,
};

CardHeader.defaultProps = {
  className: null,
};

CardHeader.Icon = CardHeaderIcon;

export default CardHeader;
