import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalFooter = ({ className, ...props }) => (
  <footer className={classNames('modal-card-foot', className)} {...props} />
);

ModalFooter.propTypes = {
  className: PropTypes.string,
};

ModalFooter.defaultProps = {
  className: null,
};

export default ModalFooter;
