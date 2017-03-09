/* eslint-disable jsx-a11y/no-static-element-interactions */
// Disabled because we want to trigger onClose when clicking the backdrop (ie. outside the modal)
import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Portal from './Portal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalTitle from './ModalTitle';

// TODO: Trap focus in modal because of accessibility
class Modal extends React.Component {

  componentDidMount() {
    this.focus();
  }

  focus() {
    if (this.props.autoFocus) {
      this.modal.lastChild.focus();
    }
  }

  render() {
    const { classic, closeBackdropButton, closeOnBackdrop, closeOnEsc, role, onClose } = this.props;

    // TODO: Check if the modal should have tabIndex="-1"
    return (
      <Portal closeOnEsc={closeOnEsc} onClose={onClose}>
        <div className={classNames('modal is-active', this.props.className)}>
          <div className="modal-background" onClick={onClose && closeOnBackdrop ? onClose : null} />
          <div
            aria-label={this.props['aria-label']}
            aria-labelledby={this.props['aria-labelledby']}
            className={classic ? 'modal-card' : 'modal-content'}
            ref={(c) => { this.modal = c; }}
            role={role}
          >
            {this.props.children}
          </div>
          {onClose && closeBackdropButton &&
            <button
              aria-label="Close"
              className="modal-close"
              onClick={onClose}
            />
          }
        </div>
      </Portal>
    );
  }
}

Modal.propTypes = {
  'aria-label': PropTypes.string,                 // The label for the modal. Should be provided for accessibility (if not, used aria-labelledby)
  'aria-labelledby': PropTypes.string,            // The id of the element that labels the modal (usally ModalTitle when classic). This our aria-label should be provided.
  autoFocus: PropTypes.bool.isRequired,           // Focus the modal content when it mounts
  children: PropTypes.node,
  classic: PropTypes.bool.isRequired,             // Classic modal. Use Header, Body and Footer
  className: PropTypes.string,
  closeBackdropButton: PropTypes.bool.isRequired, // Show a close button on the backdrop
  closeOnBackdrop: PropTypes.bool.isRequired,     // If clicking the backdrop should call onClose
  closeOnEsc: PropTypes.bool.isRequired,          // If Esc should call onClose
  role: PropTypes.oneOf([
    'dialog',
    'alertdialog',
  ]),
  onClose: PropTypes.func,                        // Callback when dismissal is requested
};

Modal.defaultProps = {
  'aria-label': null,
  'aria-labelledby': null,

  autoFocus: true,
  children: null,
  classic: false,
  className: null,

  closeBackdropButton: true,
  closeOnBackdrop: true,
  closeOnEsc: true,
  role: 'dialog',

  onClose: null,
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;

export default Modal;
