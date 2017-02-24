import React, { PropTypes } from 'react';
import classNames from 'classnames';

const CardHeaderIcon = ({ children, ...props }) => {
  const child = React.Children.only(children);
  const classes = classNames(props, 'card-header-icon', child.props.className);

  return React.cloneElement(child, { className: classes, ...props });
};

CardHeaderIcon.propTypes = {
  children: PropTypes.element,
};

export default CardHeaderIcon;
