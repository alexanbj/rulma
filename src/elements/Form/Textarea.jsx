import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Control from '../../control/Control';

const Textarea = ({ control, className, fullWidth, inline, ...props }) => {
  const classes = classNames('textarea', className, {
    'is-fullwidth': fullWidth,
    'is-inline': inline,
  });

  const textarea = (
    <textarea className={classes} {...props} />
  );

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
  control: PropTypes.bool,          // Wraps the Textarea in a <Control />
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  inline: PropTypes.bool,
  placeholder: PropTypes.string,
};

Textarea.defaultProps = {
  control: false,
  className: null,
  fullWidth: false,
  inline: false,
  placeholder: null,
};

export default Textarea;
