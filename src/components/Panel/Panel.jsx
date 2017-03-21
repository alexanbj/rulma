import React, { PropTypes } from 'react';
import classNames from 'classnames';

import PanelHeader from './PanelHeader';
import PanelBlock from './PanelBlock';
import PanelIcon from './PanelIcon';
import PanelTabs from './PanelTabs';
import PanelTab from './PanelTab';

const Panel = ({ className, ...props }) =>
  <nav className={classNames(className, 'panel')} {...props} />;

Panel.propTypes = {
  className: PropTypes.string,
};

Panel.defaultProps = {
  className: null,
};

// Add the sub components to the top level export for ease of use
Panel.Header = PanelHeader;
Panel.Block = PanelBlock;
Panel.Icon = PanelIcon;
Panel.Tabs = PanelTabs;
Panel.Tab = PanelTab;
export default Panel;
