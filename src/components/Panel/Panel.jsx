import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PanelBlock from './PanelBlock';
import PanelHeading from './PanelHeading';
import PanelTabs from './PanelTabs';
import PanelTab from './PanelTab';

const Panel = ({ as: ElementType, children, className, heading, ...props }) => (
  <ElementType className={classNames('panel', className)} {...props}>
    {heading && <PanelHeading>{heading}</PanelHeading>}
    {children}
  </ElementType>
);

Panel.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.node,
};

Panel.defaultProps = {
  as: 'div',
  children: null,
  className: null,
  heading: null,
};

Panel.Block = PanelBlock;
Panel.Heading = PanelHeading;
Panel.Tabs = PanelTabs;
Panel.Tab = PanelTab;

export default Panel;
