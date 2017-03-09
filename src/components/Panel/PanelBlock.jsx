import React, { PropTypes } from 'react';
import classNames from 'classnames';
import PanelBlockAnchor from './PanelBlockAnchor';
import PanelBlockLabel from './PanelBlockLabel';

const PanelBlock = ({ className, ...props }) =>
  <div className={classNames(className, 'panel-block')} {...props} />;

PanelBlock.propTypes = {
  className: PropTypes.string,
};

PanelBlock.defaultProps = {
  className: null,
};

PanelBlock.Anchor = PanelBlockAnchor;
PanelBlock.Label = PanelBlockLabel;
export default PanelBlock;
