import React from 'react';
import classNames, { modifierPropTypes } from '../../modifiers';

const MessageHeader = (props) => {
  const [classes, restProps] = classNames(props, 'message-header');
  return <div className={classes} {...restProps} />;
};

MessageHeader.propTypes = {
  ...modifierPropTypes,
};

export default MessageHeader;
