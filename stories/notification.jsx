import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Delete, Notification } from '../src/';

function notification(color) {
  return (
    <Notification color={color}>
      <Delete aria-label="Close" />
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor sit amet,
      consectetur adipiscing elit
    </Notification>
  );
}

storiesOf('Notification', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Notification', () =>
    <div>
      {notification()}
      {notification('primary')}
      {notification('info')}
      {notification('success')}
      {notification('warning')}
      {notification('danger')}
    </div>,
  );
