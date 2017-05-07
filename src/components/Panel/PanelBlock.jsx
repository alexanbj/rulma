import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelBlock = ({ active, children, className, icon, tag, ...props }) => {
  const classes = classNames('panel-block', className, {
    'is-active': active,
  });

  const Icon = icon
    ? (<span className="panel-icon">
      <i className={`fa fa-${icon}`} />
    </span>)
    : null;

  const Tag = tag || (props.href ? 'a' : 'div');

  return (
    <Tag className={classes} {...props}>
      {Icon}
      {children}
    </Tag>
  );
};

PanelBlock.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string, // Add an icon before the PanelBlock content, adjusts to the active prop
  href: PropTypes.string, // Renders the PanelBlock as an anchor if provided
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PanelBlock.defaultProps = {
  active: false,
  children: PropTypes.string,
  className: null,
  icon: null,
  href: null,
  tag: null,
};

export default PanelBlock;
