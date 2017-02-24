import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Block, Container, Title, Subtitle } from '../src/';

storiesOf('Title', module)
  .addDecorator(story => (
    <Container textCentered>
      {story()}
    </Container>
  ))
  .add('Title', () =>
    <div>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
    </div>,
  )
  .add('Sizes', () =>
    <div>
      <Title level="1">Title 1</Title>
      <Title level="2">Title 2</Title>
      <Title level="3">Title 3 (default size)</Title>
      <Title level="4">Title 5</Title>
      <Title level="5">Title 5</Title>
      <Title level="6">Title 6</Title>
      <Subtitle>Subtitle 1</Subtitle>
      <Subtitle>Subtitle 2</Subtitle>
      <Subtitle>Subtitle 3</Subtitle>
      <Subtitle>Subtitle 5 (default size)</Subtitle>
      <Subtitle>Subtitle 6</Subtitle>
    </div>,
  )
  .add('Combined', () =>
    <div>
      <Block>
        <Title level="1">Title 1</Title>
        <Subtitle level="3">Subtitle 3</Subtitle>
      </Block>
      <Block>
        <Title level="2">Title 2</Title>
        <Subtitle level="4">Subtitle 4</Subtitle>
      </Block>
      <Block>
        <Title>Title 3 (default)</Title>
        <Subtitle>Subtitle 5 (default)</Subtitle>
      </Block>
    </div>,
  );
