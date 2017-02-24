import React from 'react';

import classNames, { colorPropType, modifierPropTypes } from '../../modifiers';

import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';

const Message = (props) => {
  const [classes, restProps] = classNames(props, 'message');
  return (
    <article className={classes} {...restProps} />
  );
};

Message.propTypes = {
  color: colorPropType,
  ...modifierPropTypes,
};

Message.defaultProps = {
  color: null,
};

Message.Header = MessageHeader;
Message.Body = MessageBody;

export default Message;
