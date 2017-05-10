import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const MediaLeft = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'media-left');
  return <ElementType className={classes} {...restProps} />;
};

MediaLeft.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

MediaLeft.defaultProps = {
  as: 'div',
  className: null,
};

export default MediaLeft;
