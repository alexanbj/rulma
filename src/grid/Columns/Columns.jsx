import React, { PropTypes } from 'react';

import classNames from '../../modifiers';

const Columns = ({ gapless, multiline, responsive, ...props }) => {
  const [classes, restProps] = classNames(props, 'columns', {
    'is-gapless': gapless,
    'is-multiline': multiline,
    [`is-${responsive}`]: responsive,
  });

  return (
    <div className={classes} {...restProps} />
  );
};

Columns.propTypes = {
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
  responsive: PropTypes.oneOf(['mobile', 'desktop']), // By default, columns are activated from tablets and upwards. If you want columns for mobile too, set responsive accordingly.
};

Columns.defaultProps = {
  gapless: false,
  multiline: false,
  responsive: null,
};

export default Columns;
