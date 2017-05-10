import React from 'react';
import PropTypes from 'prop-types';
import modifiers from '../../modifiers';

import MediaLeft from './MediaLeft';
import MediaContent from './MediaContent';
import MediaRight from './MediaRight';

const Media = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = modifiers(props, 'media');
  return <ElementType className={classes} {...restProps} />;
};

Media.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

Media.defaultProps = {
  as: 'div',
  className: null,
};

Media.Left = MediaLeft;
Media.Content = MediaContent;
Media.Right = MediaRight;

export default Media;
