import React from 'react';
import PropTypes from 'prop-types';

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
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool, // Defined in Bulma's CSS. But does it do anything for textareas?
  inline: PropTypes.bool,
  loading: PropTypes.bool, // Show a loading indicator. Requires a control container
  noControl: PropTypes.bool, // Don't wrap the textarea with a control container
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  size: sizePropType,
};

Textarea.defaultProps = {
  color: null,
  className: null,
  disabled: false,
  fullWidth: false,
  inline: false,
  loading: false,
  noControl: false,
  placeholder: null,
  readOnly: false,
  size: null,
};

export default Textarea;
