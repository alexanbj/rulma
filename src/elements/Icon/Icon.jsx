import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { sizePropType } from '../../modifiers';

const Icon = ({ className, icon, spin, fw, size, ...rest }) => {
  const classes = {
    'fa-fw': fw,
    'fa-spin': spin,
  };

  return (
    <span className={classNames('icon', className, { [`is-${size}`]: size })} {...rest}>
      <i className={classNames(`fa fa-${icon}`, classes)} />
    </span>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  spin: PropTypes.bool,
  fw: PropTypes.bool,
  size: sizePropType,
};

Icon.defaultProps = {
  className: null,
  fw: false,
  icon: null,
  size: null,
  spin: false,
};

export default Icon;
