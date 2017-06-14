import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Content, Footer, Icon } from '../src/';

storiesOf('Footer', module).add('Footer', () =>
  <Footer>
    <Container>
      <Content textCentered>
        <p>
          <strong>rulma</strong>, a React component library for{' '}
          <a href="https://github.com/jgthms/bulma">Bulma</a>.
          The source code is licensed{' '}
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
        <p>
          <a href="https://github.com/alexanbj/rulma">
            <Icon icon="github" />
          </a>
        </p>
      </Content>
    </Container>
  </Footer>,
);
