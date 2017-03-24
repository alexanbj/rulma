import React from 'react';

import modifiers, { colorPropType, modifierPropTypes } from '../../modifiers';

const Notification = (props) => {
  const [classes, restProps] = modifiers(props, 'notification');
  return <div className={classes} {...restProps} />;
};

Notification.propTypes = {
  color: colorPropType,
  ...modifierPropTypes,
};

Notification.defaultProps = {
  color: null,
};

export default Notification;
