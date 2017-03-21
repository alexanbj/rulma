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
      <Title size="1">Title 1</Title>
      <Title size="2">Title 2</Title>
      <Title size="3">Title 3 (default size)</Title>
      <Title size="4">Title 5</Title>
      <Title size="5">Title 5</Title>
      <Title size="6">Title 6</Title>
      <Subtitle size="1">Subtitle 1</Subtitle>
      <Subtitle size="2">Subtitle 2</Subtitle>
      <Subtitle size="3">Subtitle 3</Subtitle>
      <Subtitle size="4">Subtitle 4</Subtitle>
      <Subtitle size="5">Subtitle 5 (default size)</Subtitle>
      <Subtitle size="6">Subtitle 6</Subtitle>
    </div>,
  )
  .add('Combined', () =>
    <div>
      <Block>
        <Title size="1">Title 1</Title>
        <Subtitle size="3">Subtitle 3</Subtitle>
      </Block>
      <Block>
        <Title size="2">Title 2</Title>
        <Subtitle size="4">Subtitle 4</Subtitle>
      </Block>
      <Block>
        <Title>Title 3 (default)</Title>
        <Subtitle>Subtitle 5 (default)</Subtitle>
      </Block>
    </div>,
  )
  .add('Spaced', () =>
    <div>
      <Block>
        <Title spaced size="1">Title 1</Title>
        <Subtitle size="3">Subtitle 3</Subtitle>
      </Block>
      <Block>
        <Title spaced size="2">Title 2</Title>
        <Subtitle size="4">Subtitle 4</Subtitle>
      </Block>
      <Block>
        <Title spaced>Title 3 (default)</Title>
        <Subtitle>Subtitle 5 (default)</Subtitle>
      </Block>
    </div>,
  );
