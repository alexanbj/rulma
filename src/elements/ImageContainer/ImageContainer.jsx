import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ImageContainer = ({ ratio, dimension, tag: Tag, ...props }) => {
  const classes = classNames('image', {
    [`is-${dimension}`]: dimension,
    [`is-${ratio}`]: ratio,
  });

  return <Tag className={classes} {...props} />;
};

ImageContainer.propTypes = {
  dimension: PropTypes.oneOf(['16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128']),
  ratio: PropTypes.oneOf(['square', '1by1', '4by3', '3by2', '16by9', '2by1']),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ImageContainer.defaultProps = {
  dimension: null,
  ratio: null,
  tag: 'div',
};

export default ImageContainer;
