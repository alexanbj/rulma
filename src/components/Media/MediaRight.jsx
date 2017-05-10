import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const MediaRight = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'media-right');
  return <ElementType className={classes} {...restProps} />;
};

MediaRight.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

MediaRight.defaultProps = {
  as: 'div',
  className: null,
};

export default MediaRight;
