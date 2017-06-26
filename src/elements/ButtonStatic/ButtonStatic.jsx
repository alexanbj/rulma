import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import { sizePropType } from '../../modifiers';

const ButtonStatic = ({ className, ...props }) =>
  <Button className={classNames('is-static', className)} {...props} />;

ButtonStatic.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  control: PropTypes.bool,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  size: sizePropType,
};

ButtonStatic.defaultProps = {
  as: 'span',
  className: null,
  control: false,
  expanded: false,
  fullWidth: false,
  loading: false,
  size: null,
};

export default ButtonStatic;
