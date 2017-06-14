import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Delete, Message } from '../src/';

const msg = (
  <Message.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{' '}
    <a>
      felis
      venenatis
    </a>{' '}
    efficitur.
    Aenean ac <em>eleifend lacus</em>, in mollis lectus.
    Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
    a neque.
    Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </Message.Body>
);

function message(color, bodyOnly = false) {
  return (
    <Message color={color}>
      {!bodyOnly &&
        <Message.Header>
          Hello World
          <Delete aria-label="Close" />
        </Message.Header>}
      {msg}
    </Message>
  );
}

storiesOf('Message', module)
  .addDecorator(story =>
    <Container>
      {story()}
    </Container>,
  )
  .add('Header', () =>
    <div>
      {message()}
      {message('dark')}
      {message('primary')}
      {message('info')}
      {message('success')}
      {message('warning')}
      {message('danger')}
    </div>,
  )
  .add('Body only', () =>
    <div>
      {message(null, true)}
      {message('dark', true)}
      {message('primary', true)}
      {message('info', true)}
      {message('success', true)}
      {message('warning', true)}
      {message('danger', true)}
    </div>,
  );
