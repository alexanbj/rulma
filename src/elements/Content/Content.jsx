import React from 'react';
import PropTypes from 'prop-types';

import classNames, { modifierPropTypes, sizePropType } from '../../modifiers';

/**
 * A single component to handle WYSIWYG generated content, where only HTML tags are available.
 *
 * When you can't use the components you want, or when you just want to directly use HTML tags,
 * use content as container. It can handle almost any HTML.
 */
const Content = ({ as: ElementType, ...props }) => {
  const [classes, restProps] = classNames(props, 'content');
  return <ElementType className={classes} {...restProps} />;
};

Content.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  ...modifierPropTypes,
  size: sizePropType, // Change the font size
};

Content.defaultProps = {
  as: 'div',
  size: null,
};

export default Content;
