import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Heading } from '../src/';

storiesOf('Heading', module)
  .addDecorator(story => (
    <Container textCentered>
      {story()}
    </Container>
  ))
  .add('Heading', () =>
    <Heading>
      An element for uppercased tiny headers
    </Heading>,
  );
