import React, { PropTypes } from 'react';
import classNames from 'classnames';

const ModalTitle = ({ className, ...props }) =>
  <p className={classNames('modal-card-title', className)} {...props} />;

ModalTitle.propTypes = {
  className: PropTypes.string,
};

ModalTitle.defaultProps = {
  className: null,
};

export default ModalTitle;
