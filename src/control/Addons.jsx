import React, { PropTypes } from 'react';

import Field from './Field';

const Addons = ({ centered, right, ...props }) => (
  <Field addons addonsCentered={centered} addonsRight={right} {...props} />
);

Addons.propTypes = {
  centered: PropTypes.bool,
  className: PropTypes.string,
  right: PropTypes.bool,
};

Addons.defaultProps = {
  centered: false,
  className: null,
  right: false,
};

export default Addons;
