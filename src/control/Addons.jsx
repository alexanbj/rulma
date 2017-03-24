import React, { PropTypes } from 'react';

import Field from './Field';

const Addons = ({ centered, fullWidth, right, ...props }) => (
  <Field
    addons
    addonsCentered={centered}
    addonsFullWidth={fullWidth}
    addonsRight={right}
    {...props}
  />
);

Addons.propTypes = {
  centered: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  right: PropTypes.bool,
};

Addons.defaultProps = {
  centered: false,
  className: null,
  fullWidth: false,
  right: false,
};

export default Addons;
