/* eslint-disable jsx-a11y/no-static-element-interactions */
// We want onHide click the modal background (outside of the modal)
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Portal from 'react-portal';

import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalTitle from './ModalTitle';

class Modal extends React.Component {

  componentDidMount() {
    // Autofocus the content of the modal when it is shown, better for accessibility!
    if (this.props.show && this.props.autoFocus) {
      this.modal.lastChild.focus();
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    const { classic, onHide, closeOnEsc } = this.props;

    // TODO: Check if the modal div should have tabIndex="-1"
    // TODO: Probably not hide onClick of background when not classic? Prop based perhaps
    return (
      <Portal closeOnEsc={closeOnEsc} isOpened onClose={onHide}>
        <div className={classNames('modal is-active', this.props.className)}>
          <div className="modal-background" onClick={onHide} />
          <div
            className={classic ? 'modal-card' : 'modal-content'}
            ref={(c) => { this.modal = c; }}
          >
            {this.props.children}
          </div>
          {closeOnEsc && !classic &&
            <button aria-label="Lukk" className="modal-close" onClick={onHide} />
          }
        </div>
      </Portal>
    );
  }
}

Modal.propTypes = {
  autoFocus: PropTypes.bool.isRequired,
  children: PropTypes.any,
  classic: PropTypes.bool.isRequired,
  className: PropTypes.string,
  // For now we assume that if Esc closes the modal, we should also display a close button for the non classic modal
  closeOnEsc: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  autoFocus: true,
  children: null,
  classic: true,
  className: null,
  closeOnEsc: true,
  onHide: {},
  show: true,
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;

export default Modal;
