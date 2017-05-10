import React from 'react';
import PropTypes from 'prop-types';

import classNames, { modifierPropTypes } from '../../modifiers';

const HeroHeader = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'hero-head');
  return <ElementType className={classes} {...restProps} />;
};

HeroHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  ...modifierPropTypes,
};

HeroHeader.defaultProps = {
  as: 'div',
};

export default HeroHeader;
