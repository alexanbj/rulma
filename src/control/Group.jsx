import React, { PropTypes } from 'react';

import Control from './Control';

// If the child isn't already another Control element, we need to wrap it with a control
const Group = ({ centered, right, ...props }) => (
  <Control grouped groupedCentered={centered} groupedRight={right} {...props} />
);

Group.propTypes = {
  centered: PropTypes.bool,
  right: PropTypes.bool,
};

Group.defaultProps = {
  centered: false,
  right: false,
};

export default Group;
