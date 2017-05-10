import React from 'react';
import PropTypes from 'prop-types';
import classNames, { modifierPropTypes } from '../../modifiers';

const MessageHeader = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'message-header');
  return <ElementType className={classes} {...restProps} />;
};

MessageHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  ...modifierPropTypes,
};

MessageHeader.defaultProps = {
  as: 'div',
};

export default MessageHeader;
