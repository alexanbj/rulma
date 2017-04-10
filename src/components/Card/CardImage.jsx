import React from 'react';
import PropTypes from 'prop-types';
import modifiers from '../../modifiers';

const CardImage = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'card-image');
  return <Tag className={classes} {...restProps} />;
};

CardImage.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CardImage.defaultProps = {
  className: null,
  tag: 'div',
};

export default CardImage;
