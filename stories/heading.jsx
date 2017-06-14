import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Heading } from '../src/';

storiesOf('Heading', module)
  .addDecorator(story =>
    <Container textCentered>
      {story()}
    </Container>,
  )
  .add('Heading', () =>
    <Heading>
      An element for uppercased tiny headers
    </Heading>,
  );
