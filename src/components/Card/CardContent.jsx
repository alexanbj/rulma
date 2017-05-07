import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const CardContent = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = classNames(props, 'card-content');
  return <Tag className={classes} {...restProps} />;
};

CardContent.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CardContent.defaultProps = {
  className: null,
  tag: 'div',
};

export default CardContent;
