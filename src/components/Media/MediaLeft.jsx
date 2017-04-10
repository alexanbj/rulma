import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const MediaLeft = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = classNames(props, 'media-left');
  return <Tag className={classes} {...restProps} />;
};

MediaLeft.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

MediaLeft.defaultProps = {
  className: null,
  tag: 'div',
};

export default MediaLeft;
