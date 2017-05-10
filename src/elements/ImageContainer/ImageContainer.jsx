import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ImageContainer = ({ as: ElementType, ratio, dimension, ...props }) => {
  const classes = classNames('image', {
    [`is-${dimension}`]: dimension,
    [`is-${ratio}`]: ratio,
  });

  return <ElementType className={classes} {...props} />;
};

ImageContainer.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  dimension: PropTypes.oneOf(['16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128']),
  ratio: PropTypes.oneOf(['square', '1by1', '4by3', '3by2', '16by9', '2by1']),
};

ImageContainer.defaultProps = {
  as: 'div',
  dimension: null,
  ratio: null,
};

export default ImageContainer;
