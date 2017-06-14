import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalBody = ({ className, ...props }) =>
  <section className={classNames('modal-card-body', className)} {...props} />;

ModalBody.propTypes = {
  className: PropTypes.string,
};

ModalBody.defaultProps = {
  className: null,
};

export default ModalBody;
