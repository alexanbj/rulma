import React from 'react';
import PropTypes from 'prop-types';

import modifiers from '../../modifiers';

const MediaContent = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'media-content');
  return <Tag className={classes} {...restProps} />;
};

MediaContent.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

MediaContent.defaultProps = {
  className: null,
  tag: 'div',
};

export default MediaContent;
