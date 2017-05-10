import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelBlock = ({ as, active, children, className, icon, ...props }) => {
  const classes = classNames('panel-block', className, {
    'is-active': active,
  });

  const Icon = icon
    ? (<span className="panel-icon">
      <i className={`fa fa-${icon}`} />
    </span>)
    : null;

  const ElementType = as || (props.href ? 'a' : 'div');

  return (
    <ElementType className={classes} {...props}>
      {Icon}
      {children}
    </ElementType>
  );
};

PanelBlock.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string, // Add an icon before the PanelBlock content, adjusts to the active prop
  href: PropTypes.string, // Renders the PanelBlock as an anchor if provided
};

PanelBlock.defaultProps = {
  as: null,
  active: false,
  children: PropTypes.string,
  className: null,
  icon: null,
  href: null,
};

export default PanelBlock;
