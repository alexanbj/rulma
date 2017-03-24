import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { Delete } from '../../';

const ModalHeader = ({ className, children, onClose, closeButtonAriaLabel, ...props }) => (
  <header className={classNames('modal-card-head', className)} {...props}>
    {children}
    {onClose && <Delete onClick={onClose} aria-label={closeButtonAriaLabel} />}
  </header>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeButtonAriaLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func, // Display a close button in the header
};

ModalHeader.defaultProps = {
  children: null,
  className: null,
  closeButtonAriaLabel: 'Close',
  onClose: null,
};

export default ModalHeader;
