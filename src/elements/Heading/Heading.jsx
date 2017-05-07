import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const Heading = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = classNames(props, 'heading');
  return <Tag className={classes} {...restProps} />;
};

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Heading.defaultProps = {
  className: null,
  tag: 'p',
};

export default Heading;
