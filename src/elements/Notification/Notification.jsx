import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { colorPropType, modifierPropTypes } from '../../modifiers';

const Notification = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = modifiers(props, 'notification');
  return <ElementType className={classes} {...restProps} />;
};

Notification.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: colorPropType,
  ...modifierPropTypes,
};

Notification.defaultProps = {
  as: 'div',
  color: null,
};

export default Notification;
