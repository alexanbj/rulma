import React, { PropTypes } from 'react';
import classNames from 'classnames';

import MediaLeft from './MediaLeft';
import MediaContent from './MediaContent';
import MediaRight from './MediaRight';

const Media = ({ className, ...props }) => (
  <article className={classNames('media', className)} {...props} />
);

Media.propTypes = {
  className: PropTypes.string,
};

Media.defaultProps = {
  className: null,
};

Media.Left = MediaLeft;
Media.Content = MediaContent;
Media.Right = MediaRight;

export default Media;
