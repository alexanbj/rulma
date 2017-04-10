import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

const Group = ({ centered, right, ...props }) => (
  <Field grouped groupedCentered={centered} groupedRight={right} {...props} />
);

Group.propTypes = {
  centered: PropTypes.bool,
  className: PropTypes.string,
  right: PropTypes.bool,
};

Group.defaultProps = {
  centered: false,
  className: null,
  right: false,
};

export default Group;
