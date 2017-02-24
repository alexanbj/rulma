import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { Delete } from '../../';

const ModalHeader = ({ className, children, onHide, onHideAriaLabel, ...props }) => (
  <header className={classNames('modal-card-head', className)} {...props}>
    {children}
    {onHide &&
      <Delete onClick={onHide} aria-label={onHideAriaLabel} />
    }
  </header>
);

ModalHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onHide: PropTypes.func,
  onHideAriaLabel: PropTypes.string.isRequired,
};

ModalHeader.defaultProps = {
  children: null,
  className: null,
  onHide: null,
  onHideAriaLabel: 'Lukk',
};

export default ModalHeader;
