import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const CardTitle = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = classNames(props, 'card-header-title');
  return <Tag className={classes} {...restProps} />;
};

CardTitle.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CardTitle.defaultProps = {
  className: null,
  tag: 'p',
};

export default CardTitle;
