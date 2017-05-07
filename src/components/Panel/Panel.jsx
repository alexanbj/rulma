import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PanelBlock from './PanelBlock';
import PanelHeading from './PanelHeading';
import PanelTabs from './PanelTabs';
import PanelTab from './PanelTab';

const Panel = ({ children, className, heading, tag: Tag, ...props }) => (
  <Tag className={classNames('panel', className)} {...props}>
    {heading && <PanelHeading>{heading}</PanelHeading>}
    {children}
  </Tag>
);

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Panel.defaultProps = {
  children: null,
  className: null,
  heading: null,
  tag: 'div',
};

Panel.Block = PanelBlock;
Panel.Heading = PanelHeading;
Panel.Tabs = PanelTabs;
Panel.Tab = PanelTab;

export default Panel;
