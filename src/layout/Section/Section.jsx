import React, { PropTypes } from 'react';

import modifiers, { sizePropType } from '../../modifiers';

/**
* A simple container to divide the page into sections
*/
const Section = ({ tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'section');

  return <Tag className={classes} {...restProps} />;
};

Section.propTypes = {
  size: sizePropType,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Section.defaultProps = {
  size: null,
  tag: 'section',
};

export default Section;
