import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const Heading = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'heading');
  return <ElementType className={classes} {...restProps} />;
};

Heading.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

Heading.defaultProps = {
  as: 'p',
  className: null,
};

export default Heading;
