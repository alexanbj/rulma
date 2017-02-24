import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Footer } from '../src/';

storiesOf('Footer', module)
  .add('Footer', () =>
    <Footer>
      <Container>
        TODO: Something cool here
      </Container>
    </Footer>,
  );
