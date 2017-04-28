import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { sizePropType } from '../../modifiers';

const Icon = ({ className, fw, icon, left, right, spin, size, ...rest }) => {
  const iconClasses = classNames(`fa fa-${icon}`, {
    'fa-fw': fw,
    'fa-spin': spin,
  });

  const containerClasses = classNames('icon', className, {
    'is-left': left,
    'is-right': right,
    [`is-${size}`]: size,
  });

  return (
    <span className={containerClasses} {...rest}>
      <i className={iconClasses} />
    </span>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  fw: PropTypes.bool,
  icon: PropTypes.string,
  left: PropTypes.bool, // When within a <Control />
  right: PropTypes.bool, // When within a <Control />
  spin: PropTypes.bool,
  size: sizePropType,
};

Icon.defaultProps = {
  className: null,
  fw: false,
  icon: null,
  left: false,
  right: false,
  size: null,
  spin: false,
};

export default Icon;
