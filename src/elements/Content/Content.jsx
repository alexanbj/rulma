import React, { PropTypes } from 'react';

import classNames, { modifierPropTypes } from '../../modifiers';

/**
* A single component to handle WYSIWYG generated content, where only HTML tags are available.
*
* When you can't use the components you want, or when you just want to directly use HTML tags, use content as container. It can handle almost any HTML.
*/
const Content = (props) => {
  const [classes, restProps] = classNames(props, 'content');
  return (
    <div className={classes} {...restProps} />
  );
};

Content.propTypes = {
  ...modifierPropTypes,
};

export default Content;
