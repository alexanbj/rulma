import React from 'react';
import PropTypes from 'prop-types';

import classNames, { modifierPropTypes } from '../../modifiers';

const Container = ({ as: ElementType, fluid, ...props }) => {
  const [classes, restProps] = classNames(props, 'container', {
    'is-fluid': fluid,
  });

  return <ElementType className={classes} {...restProps} />;
};

Container.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  ...modifierPropTypes,
};

Container.defaultProps = {
  as: 'div',
  fluid: false,
};

export default Container;
