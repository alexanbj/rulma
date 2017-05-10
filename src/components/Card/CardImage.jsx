import React from 'react';
import PropTypes from 'prop-types';
import modifiers from '../../modifiers';

const CardImage = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = modifiers(props, 'card-image');
  return <ElementType className={classes} {...restProps} />;
};

CardImage.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardImage.defaultProps = {
  as: 'div',
  className: null,
};

export default CardImage;
