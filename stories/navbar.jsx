import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Button, Nav } from '../src/';

storiesOf('Nav', module)
  .add('Nav', () =>
    <Nav shadow>
      <Container>
        <Nav.Left>
          <Nav.Item brand>
            <a>
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
            </a>
          </Nav.Item>
        </Nav.Left>
        <Nav.Center>
          <Nav.Item active tab>
            <a>Link 1</a>
          </Nav.Item>
          <Nav.Item>
            <a>Link 2</a>
          </Nav.Item>
          <Nav.Item>
            <a>Test</a>
          </Nav.Item>
        </Nav.Center>
        <Nav.Toggle />
        <Nav.Right>
          <Nav.Item>
            <a>Documentation</a>
          </Nav.Item>
          <Nav.Item>
            <span>
              <Button>Documentation</Button>
            </span>
          </Nav.Item>
          <Nav.Item>
            <a>Blog</a>
          </Nav.Item>
        </Nav.Right>
      </Container>
    </Nav>,
  );
