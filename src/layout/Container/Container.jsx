import React, { PropTypes } from 'react';

import classNames, { modifierPropTypes } from '../../modifiers';

const Container = ({ fluid, ...props }) => {
  const [classes, restProps] = classNames(props, 'container', {
    'is-fluid': fluid,
  });

  return <div className={classes} {...restProps} />;
};

Container.propTypes = {
  fluid: PropTypes.bool,
  ...modifierPropTypes,
};

Container.defaultProps = {
  fluid: false,
};

export default Container;
