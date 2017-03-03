import React from 'react';
import classNames from 'classnames';

import PanelHeader from './PanelHeader';
import PanelBlock from './PanelBlock';
import PanelIcon from './PanelIcon';
import PanelTabs from './PanelTabs';

const Panel = ({ className, ...props }) =>
  <nav className={classNames(className, 'panel')} {...props} />;

Panel.Header = PanelHeader;
Panel.Block = PanelBlock;
Panel.Icon = PanelIcon;
Panel.Tabs = PanelTabs;
export default Panel;
