import React from 'react';
import PropTypes from 'prop-types';

import classNames, { modifierPropTypes } from '../../modifiers';

const HeroFooter = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'hero-foot');
  return <ElementType className={classes} {...restProps} />;
};

HeroFooter.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  ...modifierPropTypes,
};

HeroFooter.defaultProps = {
  as: 'div',
};

export default HeroFooter;
