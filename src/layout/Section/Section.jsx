import React from 'react';

import classNames, { sizePropType } from '../../modifiers';

/**
* A simple container to divide the page into sections
*/
const Section = (props) => {
  const [classes, restProps] = classNames(props, 'section');
  return <section className={classes} {...restProps} />;
};

Section.propTypes = {
  size: sizePropType,
};

Section.defaultProps = {
  size: null,
};

export default Section;
