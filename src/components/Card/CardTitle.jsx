import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const CardTitle = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'card-header-title');
  return <ElementType className={classes} {...restProps} />;
};

CardTitle.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardTitle.defaultProps = {
  as: 'p',
  className: null,
};

export default CardTitle;
