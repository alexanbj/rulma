import React, { PropTypes } from 'react';

import Control from './Control';

const Addons = ({ centered, right, ...props }) =>
  <Control addons addonsCentered={centered} addonsRight={right} {...props} />;

Addons.propTypes = {
  centered: PropTypes.bool,
  right: PropTypes.bool,
};

Addons.defaultProps = {
  centered: false,
  right: false,
};

export default Addons;
