import React, { PropTypes } from 'react';
import classNames, { sizePropType } from '../../modifiers';

const Delete = (props) => {
  const [classes, restProps] = classNames(props, 'delete');
  return <button className={classes} {...restProps} />;
};

Delete.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  size: sizePropType,
};

Delete.defaultProps = {
  'aria-label': 'Lukk',
  size: null,
};

export default Delete;
