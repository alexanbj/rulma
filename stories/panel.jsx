import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Panel, Button } from '../src/';

storiesOf('Panel', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Panel', () => (
    <Panel>
      <Panel.Header>Repositories</Panel.Header>
      <Panel.Block>
        <p className="control has-icon">
          <input className="input is-small" type="text" placeholder="Search" />
          <span className="icon is-small">
            <i className="fa fa-search" />
          </span>
        </p>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab active>All</Panel.Tab>
        <Panel.Tab>Public</Panel.Tab>
        <Panel.Tab>PrivPanel.Tabte</Panel.Tab>
        <Panel.Tab>Sources</Panel.Tab>
        <Panel.Tab>Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.Block.Anchor active>
        <Panel.Icon icon="book" />
        bulma
      </Panel.Block.Anchor>
      <Panel.Block.Anchor>
        <Panel.Icon icon="book" />
        minisheet
      </Panel.Block.Anchor>
      <Panel.Block.Anchor>
        <Panel.Icon icon="book" />
        marksheet
      </Panel.Block.Anchor>
      <Panel.Block.Anchor>
        <Panel.Icon icon="code-fork" />
        third
      </Panel.Block.Anchor>
      <Panel.Block.Label>
        <input type="checkbox" />
        Remember me
      </Panel.Block.Label>
      <Panel.Block>
        <Button color="primary" outlined fullWidth>Reset all filters</Button>
      </Panel.Block>
    </Panel>));
