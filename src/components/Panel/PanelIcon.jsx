import React, { PropTypes } from 'react';
import classNames from 'classnames';

const PanelIcon = ({icon, spin, fw, ...rest }) => {
  const classes = {
    'fa-fw': fw,
    'fa-spin': spin,
  };

  return (
    <span
      aria-hidden
      className={('panel-icon')}
      {...rest}
    >
      <i className={classNames(`fa fa-${icon}`, classes)} />
    </span>
  );
};

PanelIcon.propTypes = {
  icon: PropTypes.string,
  spin: PropTypes.bool,
  fw: PropTypes.bool,
};

PanelIcon.defaultProps = {
  fw: false,
  icon: null,
  spin: false,
};

export default PanelIcon;
