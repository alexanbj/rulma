import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Tile, Notification } from '../src/';

storiesOf('Tiles', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add(null, () =>
    <Tile ancestor>
      <Tile vertical parent>
        <Tile child>
          <Notification color="primary">
            Vertical...
          </Notification>
          <Notification color="warning">
            ...tiles
          </Notification>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child>
          <Notification color="danger">
            Wide tile
          </Notification>
        </Tile>
      </Tile>
    </Tile>,
  );
