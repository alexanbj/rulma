import React from 'react';
import PropTypes from 'prop-types';

import classNames, { modifierPropTypes } from '../../modifiers';

const HeroBody = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'hero-body');
  return <ElementType className={classes} {...restProps} />;
};

HeroBody.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  ...modifierPropTypes,
};

HeroBody.defaultProps = {
  as: 'div',
};

export default HeroBody;
