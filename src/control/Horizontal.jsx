import React, { PropTypes } from 'react';

import Field from './Field';

const Horizontal = props => <Field horizontal {...props} />;

Horizontal.propTypes = {
  className: PropTypes.string,
};

Horizontal.defaultProps = {
  className: null,
};

export default Horizontal;
