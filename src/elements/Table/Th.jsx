import React from 'react';
import PropTypes from 'prop-types';
import classNames, { modifierPropTypes } from '../../modifiers';

const Th = (props) => {
  const [classes, restProps] = classNames(props);

  return <th className={classes} {...restProps} />;
};

Th.propTypes = {
  className: PropTypes.string,
  ...modifierPropTypes,
};

Th.defaultProps = {
  className: null,
};

export default Th;
