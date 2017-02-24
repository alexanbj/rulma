import React, { PropTypes } from 'react';

import Control from './Control';

const Addons = props =>
  <Control addons {...props} />;

Addons.propTypes = {
  centered: PropTypes.bool,
  right: PropTypes.bool,
};

Addons.defaultProps = {
  centered: false,
  right: false,
};

Addons.isControl = true;

export default Addons;
