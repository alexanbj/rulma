import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const Columns = ({ gapless, multiline, responsive, vCentered, ...props }) => {
  const [classes, restProps] = classNames(props, 'columns', {
    'is-gapless': gapless,
    'is-multiline': multiline,
    'is-vcentered': vCentered,
    [`is-${responsive}`]: responsive,
  });

  return <div className={classes} {...restProps} />;
};

Columns.propTypes = {
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
  responsive: PropTypes.oneOf(['mobile', 'desktop']), // By default, columns are activated from tablets and upwards. If you want columns for mobile too, set responsive accordingly.
  vCentered: PropTypes.bool,
};

Columns.defaultProps = {
  gapless: false,
  multiline: false,
  responsive: null,
  vCentered: false,
};

export default Columns;
