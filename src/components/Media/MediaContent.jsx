import React from 'react';
import PropTypes from 'prop-types';

import modifiers from '../../modifiers';

const MediaContent = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = modifiers(props, 'media-content');
  return <ElementType className={classes} {...restProps} />;
};

MediaContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

MediaContent.defaultProps = {
  as: 'div',
  className: null,
};

export default MediaContent;
