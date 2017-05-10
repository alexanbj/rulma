import React from 'react';
import PropTypes from 'prop-types';
import classNames, { modifierPropTypes } from '../../modifiers';

const MessageBody = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'message-body');
  return <ElementType className={classes} {...restProps} />;
};

MessageBody.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  ...modifierPropTypes,
};

MessageBody.defaultProps = {
  as: 'div',
};

export default MessageBody;
