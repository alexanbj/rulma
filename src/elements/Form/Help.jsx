import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { colorPropType } from '../../modifiers';

const Help = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = modifiers(props, 'help');

  return <ElementType className={classes} {...restProps} />;
};

Help.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: colorPropType,
};

Help.defaultProps = {
  as: 'div',
  className: null,
  color: null,
};

export default Help;
