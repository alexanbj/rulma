import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const CardContent = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'card-content');
  return <ElementType className={classes} {...restProps} />;
};

CardContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardContent.defaultProps = {
  as: 'div',
  className: null,
};

export default CardContent;
