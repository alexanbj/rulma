import React, { PropTypes } from 'react';

import modifiers, { colorPropType } from '../../modifiers';

const Help = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'help');

  return <Tag className={classes} {...restProps} />;
};

Help.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Help.defaultProps = {
  className: null,
  color: null,
  tag: 'div',
};

export default Help;
