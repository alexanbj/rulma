import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Delete, Message, Notification, Tag } from '../src/';

storiesOf('Delete', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Delete', () =>
    <Delete />,
  )
  .add('Tags', () =>
    <Tag>
      Hello world
      <Delete />
    </Tag>,
  )
  .add('Notifications', () =>
    <Notification>
      <Delete />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet,
      consectetur adipiscing elit
    </Notification>,
  )
  .add('Messages', () =>
    <Message>
      <Message.Header>
        Info
        <Delete />
      </Message.Header>
      <Message.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis
        placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
        venenatis efficitur.
        Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
        tortor urna tempor ligula, id porttitor mi magna a neque.
        Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </Message.Body>
    </Message>,
  );
