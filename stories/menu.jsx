import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Menu } from '../src/';

storiesOf('Menu', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Menu', () =>
    <Menu>
      <Menu.Label>General</Menu.Label>
      <Menu.List>
        <Menu.ItemLink>Dashboard</Menu.ItemLink>
        <Menu.ItemLink>Customers</Menu.ItemLink>
      </Menu.List>
      <Menu.Label>Administration</Menu.Label>
      <Menu.List>
        <Menu.ItemLink>Team Settings</Menu.ItemLink>
        <Menu.Item>
          <Menu.ItemLink>Click me</Menu.ItemLink>
          <Menu.SubList>
            <Menu.ItemLink>Members</Menu.ItemLink>
            <Menu.ItemLink>Plugins</Menu.ItemLink>
            <Menu.ItemLink>Add a member</Menu.ItemLink>
          </Menu.SubList>
        </Menu.Item>
        <Menu.ItemLink>Invitations</Menu.ItemLink>
        <Menu.ItemLink>Cloud Storage Environment Settings</Menu.ItemLink>
        <Menu.ItemLink>Authentication</Menu.ItemLink>
      </Menu.List>
      <Menu.Label>Transactions</Menu.Label>
      <Menu.List>
        <Menu.ItemLink>Payments</Menu.ItemLink>
        <Menu.ItemLink>Transfers</Menu.ItemLink>
        <Menu.ItemLink>Balance</Menu.ItemLink>
      </Menu.List>
    </Menu>,
  )
  .add('smaller Menu', () =>
    <Menu>
      <Menu.Label>Administration</Menu.Label>
      <Menu.List>
        <Menu.Item>
          <Menu.ItemLink>Team Settings</Menu.ItemLink>
        </Menu.Item>
        <Menu.Item open>
          <Menu.ItemLink>Manage Your Team</Menu.ItemLink>
          <Menu.SubList>
            <Menu.ItemLink>Members</Menu.ItemLink>
            <Menu.ItemLink>Plugins</Menu.ItemLink>
            <Menu.ItemLink>Add a member</Menu.ItemLink>
          </Menu.SubList>
        </Menu.Item>
      </Menu.List>
    </Menu>,
  )
;
