import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Button, Container, Input, Panel } from '../src/';

storiesOf('Panel', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Panel', () =>
    <Panel heading="Repositories" tag="nav">
      <Panel.Block>
        <Input size="small" iconLeft="search" iconSize="small" placeholder="Search" />
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab active>All</Panel.Tab>
        <Panel.Tab>Public</Panel.Tab>
        <Panel.Tab>Private</Panel.Tab>
        <Panel.Tab>Sources</Panel.Tab>
        <Panel.Tab>Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.Block href="#" active icon="book">
        rulma
      </Panel.Block>
      <Panel.Block href="#" icon="book">
        bulma
      </Panel.Block>
      <Panel.Block href="#" icon="code-fork">
        React
      </Panel.Block>
      <Panel.Block href="#" icon="code-fork">
        Redux
      </Panel.Block>
      <Panel.Block tag="label">
        <input type="checkbox" />
        Remember me
      </Panel.Block>
      <Panel.Block>
        <Button fullWidth outlined color="primary">Reset all filters</Button>
      </Panel.Block>
    </Panel>,
  );
