import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Progress } from '../src/';

storiesOf('Progress', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Colors', () =>
    <div>
      <Progress value="15" max="100">15%</Progress>
      <Progress value="30" max="100" color="primary">30%</Progress>
      <Progress value="45" max="100" color="info">45%</Progress>
      <Progress value="60" max="100" color="success">60%</Progress>
      <Progress value="75" max="100" color="warning">75%</Progress>
      <Progress value="90" max="100" color="danger">90%</Progress>
    </div>,
  )
  .add('Sizes', () =>
    <div>
      <Progress value="15" max="100" size="small">15%</Progress>
      <Progress value="30" max="100">30%</Progress>
      <Progress value="45" max="100" size="medium">45%</Progress>
      <Progress value="60" max="100" size="large">60%</Progress>
    </div>,
  );
