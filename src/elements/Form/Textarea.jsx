import React, { PropTypes } from 'react';

import modifiers, { sizePropType, colorPropType } from '../../modifiers';
import Control from '../../control';

const Textarea = ({ control, fullWidth, inline, ...props }) => {
  const [classes, restProps] = modifiers(props, 'textarea', {
    'is-fullwidth': fullWidth,
    'is-inline': inline,
  });

  const textarea = <textarea className={classes} {...restProps} />;

  if (control) {
    return (
      <Control>
        {textarea}
      </Control>
    );
  }

  return textarea;
};

Textarea.propTypes = {
  color: colorPropType,
  control: PropTypes.bool, // Wraps the Textarea in a <Control />
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  inline: PropTypes.bool,
  placeholder: PropTypes.string,
  size: sizePropType,
};

Textarea.defaultProps = {
  color: null,
  control: false,
  className: null,
  fullWidth: false,
  inline: false,
  placeholder: null,
  size: null,
};

export default Textarea;
