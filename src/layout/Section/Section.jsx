import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { sizePropType } from '../../modifiers';

/**
* A simple container to divide the page into sections
*/
const Section = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = modifiers(props, 'section');

  return <ElementType className={classes} {...restProps} />;
};

Section.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: sizePropType,
};

Section.defaultProps = {
  as: 'section',
  size: null,
};

export default Section;
