import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const Columns = ({
  as: ElementType,
  centered,
  gapless,
  multiline,
  responsive,
  vCentered,
  ...props
}) => {
  const [classes, restProps] = classNames(props, 'columns', {
    'is-centered': centered,
    'is-gapless': gapless,
    'is-multiline': multiline,
    'is-vcentered': vCentered,
    [`is-${responsive}`]: responsive,
  });

  return <ElementType className={classes} {...restProps} />;
};

Columns.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  centered: PropTypes.bool,
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
  responsive: PropTypes.oneOf(['mobile', 'desktop']), // By default, columns are activated from tablets and upwards. If you want columns for mobile too, set responsive accordingly.
  vCentered: PropTypes.bool, // Vertically center the columns
};

Columns.defaultProps = {
  as: 'div',
  centered: false,
  gapless: false,
  multiline: false,
  responsive: null,
  vCentered: false,
};

export default Columns;
