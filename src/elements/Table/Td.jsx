import React from 'react';
import PropTypes from 'prop-types';
import classNames, { modifierPropTypes } from '../../modifiers';

const Td = (props) => {
  const [classes, restProps] = classNames(props);

  return <td className={classes} {...restProps} />;
};

Td.propTypes = {
  className: PropTypes.string,
  ...modifierPropTypes,
};

Td.defaultProps = {
  className: null,
};

export default Td;
