import React from 'react';
import classNames, { modifierPropTypes } from '../../modifiers';

const MessageBody = (props) => {
  const [classes, restProps] = classNames(props, 'message-body');
  return <div className={classes} {...restProps} />;
};

MessageBody.propTypes = {
  ...modifierPropTypes,
};

export default MessageBody;
