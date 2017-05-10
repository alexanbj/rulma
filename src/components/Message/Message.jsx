import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { colorPropType, modifierPropTypes } from '../../modifiers';

import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';

const Message = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = modifiers(props, 'message');

  return <ElementType className={classes} {...restProps} />;
};

Message.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: colorPropType,
  ...modifierPropTypes,
};

Message.defaultProps = {
  as: 'div',
  color: null,
};

Message.Header = MessageHeader;
Message.Body = MessageBody;

export default Message;
