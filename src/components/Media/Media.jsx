import React, { PropTypes } from 'react';
import modifiers from '../../modifiers';

import MediaLeft from './MediaLeft';
import MediaContent from './MediaContent';
import MediaRight from './MediaRight';

const Media = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'media');
  return <Tag className={classes} {...restProps} />;
};

Media.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Media.defaultProps = {
  className: null,
  tag: 'div',
};

Media.Left = MediaLeft;
Media.Content = MediaContent;
Media.Right = MediaRight;

export default Media;
