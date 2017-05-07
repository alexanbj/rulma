import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Delete, Tag } from '../src/';

storiesOf('Tag', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Tag', () =>
    <Tag>Tag label</Tag>,
  )
  .add('Colors', () =>
    <div>
      <Tag color="black">Black</Tag>
      <Tag color="dark">Dark</Tag>
      <Tag color="light">Light</Tag>
      <Tag color="white">White</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="info">Info</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="danger">Danger</Tag>
    </div>,
  )
  .add('Sizes', () =>
    <div>
      <Tag size="medium">
        Medium
      </Tag>
      <Tag size="large">
        Large
      </Tag>
    </div>,
  )
  .add('Delete button', () =>
    <div>
      <Tag>
        Hello
        <Delete size="small" aria-label="Remove" />
      </Tag>
      <Tag size="medium" color="info">
        World
        <Delete size="small" aria-label="Remove" />
      </Tag>
      <Tag size="large" color="warning">
        !!!!
        <Delete aria-label="Remove" />
      </Tag>
    </div>,
  );
