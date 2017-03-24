import React, { PropTypes } from 'react';

import modifiers, { colorPropType, modifierPropTypes } from '../../modifiers';

import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';

const Message = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'message');

  return (
    <Tag className={classes} {...restProps} />
  );
};

Message.propTypes = {
  color: colorPropType,
  ...modifierPropTypes,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Message.defaultProps = {
  color: null,
  tag: 'div',
};

Message.Header = MessageHeader;
Message.Body = MessageBody;

export default Message;
