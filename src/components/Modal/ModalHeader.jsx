import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalTitle from './ModalTitle';

import { Delete } from '../../';

const ModalHeader = ({ className, children, onClose, title, closeButtonAriaLabel, ...props }) => (
  <header className={classNames('modal-card-head', className)} {...props}>
    {title ? <ModalTitle>{title}</ModalTitle> : children}
    {onClose && <Delete onClick={onClose} aria-label={closeButtonAriaLabel} />}
  </header>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeButtonAriaLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func, // Display a close button in the header
  title: PropTypes.node, // The title/heading of the modal
};

ModalHeader.defaultProps = {
  children: null,
  className: null,
  closeButtonAriaLabel: 'Close',
  onClose: null,
  title: null,
};

export default ModalHeader;
