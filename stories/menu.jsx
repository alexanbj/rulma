import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Menu } from '../src/';

storiesOf('Menu', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Menu', () => (
    <Menu>
      <Menu.Label>General</Menu.Label>
      <Menu.List>
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>Customers</Menu.Item>
      </Menu.List>
      <Menu.Label>Administration</Menu.Label>
      <Menu.List>
        <Menu.Item>Team Settings</Menu.Item>
        <Menu.Item
          active
          menu={
            <Menu.List>
              <Menu.Item>Members</Menu.Item>
              <Menu.Item>Plugins</Menu.Item>
              <Menu.Item>Add a member</Menu.Item>
            </Menu.List>
          }
        >
          Manage Your Team
        </Menu.Item>
        <Menu.Item>Invitations</Menu.Item>
        <Menu.Item>Cloud Storage Environment Settings</Menu.Item>
        <Menu.Item>Authentication</Menu.Item>
      </Menu.List>
      <Menu.Label>Transactions</Menu.Label>
      <Menu.List>
        <Menu.Item>Payments</Menu.Item>
        <Menu.Item>Transfers</Menu.Item>
        <Menu.Item>Balance</Menu.Item>
      </Menu.List>
    </Menu>
  ));
