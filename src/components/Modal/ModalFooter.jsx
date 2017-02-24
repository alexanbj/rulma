import React, { PropTypes } from 'react';
import classNames from 'classnames';

const ModalFooter = ({ className, ...props }) =>
  <footer className={classNames('modal-card-foot', className)} {...props} />;

ModalFooter.propTypes = {
  className: PropTypes.string,
};

ModalFooter.defaultProps = {
  className: null,
};

export default ModalFooter;
