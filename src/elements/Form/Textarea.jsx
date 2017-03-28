import React, { PropTypes } from 'react';

import modifiers, { sizePropType, colorPropType } from '../../modifiers';
import Control from '../../control';

const Textarea = ({ fullWidth, inline, loading, noControl, ...props }) => {
  const [classes, restProps] = modifiers(props, 'textarea', {
    'is-fullwidth': fullWidth,
    'is-inline': inline,
  });

  const textarea = <textarea className={classes} {...restProps} />;

  if (!noControl) {
    return (
      <Control loading={loading}>
        {textarea}
      </Control>
    );
  }

  return textarea;
};

Textarea.propTypes = {
  color: colorPropType,
  className: PropTypes.string,
  fullWidth: PropTypes.bool, // Defined in Bulma's CSS. But does it do anything for textareas?
  inline: PropTypes.bool,
  loading: PropTypes.bool, // Show a loading indicator. Requires a control container
  noControl: PropTypes.bool, // Don't wrap the textarea with a control container
  placeholder: PropTypes.string,
  size: sizePropType,
};

Textarea.defaultProps = {
  color: null,
  control: false,
  className: null,
  fullWidth: false,
  inline: false,
  loading: false,
  noControl: false,
  placeholder: null,
  size: null,
};

export default Textarea;
