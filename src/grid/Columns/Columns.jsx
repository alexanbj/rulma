import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../modifiers';

const Columns = ({ centered, gapless, multiline, responsive, tag: Tag, vCentered, ...props }) => {
  const [classes, restProps] = classNames(props, 'columns', {
    'is-centered': centered,
    'is-gapless': gapless,
    'is-multiline': multiline,
    'is-vcentered': vCentered,
    [`is-${responsive}`]: responsive,
  });

  return <Tag className={classes} {...restProps} />;
};

Columns.propTypes = {
  centered: PropTypes.bool,
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
  responsive: PropTypes.oneOf(['mobile', 'desktop']), // By default, columns are activated from tablets and upwards. If you want columns for mobile too, set responsive accordingly.
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  vCentered: PropTypes.bool, // Vertically center the columns
};

Columns.defaultProps = {
  centered: false,
  gapless: false,
  multiline: false,
  responsive: null,
  tag: 'div',
  vCentered: false,
};

export default Columns;
