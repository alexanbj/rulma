import React, { PropTypes } from 'react';

import classNames from '../../modifiers';

const MediaRight = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = classNames(props, 'media-right');
  return <Tag className={classes} {...restProps} />;
};

MediaRight.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

MediaRight.defaultProps = {
  className: null,
  tag: 'div',
};

export default MediaRight;
