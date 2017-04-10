import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalTitle = ({ className, ...props }) => (
  <p className={classNames('modal-card-title', className)} {...props} />
);

ModalTitle.propTypes = {
  className: PropTypes.string,
};

ModalTitle.defaultProps = {
  className: null,
};

export default ModalTitle;
