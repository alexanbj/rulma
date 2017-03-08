import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Container, Button, Icon, Nav } from '../src/';
import Toggler from './Toggler';

storiesOf('Nav', module)
  .add('Nav', () =>
    <Toggler>
      {(toggle, value) => (
        <Nav>
          <Nav.Left>
            <Nav.Item brand>
              <a>
                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
              </a>
            </Nav.Item>
          </Nav.Left>
          <Nav.Center>
            <Nav.Item>
              <a><Icon icon="github" /></a>
            </Nav.Item>
            <Nav.Item>
              <a><Icon icon="twitter" /></a>
            </Nav.Item>
          </Nav.Center>
          <Nav.Toggle onClick={toggle} />
          <Nav.Right menu active={value}>
            <Nav.Item>
              <a>Home</a>
            </Nav.Item>
            <Nav.Item>
              <a>Documentation</a>
            </Nav.Item>
            <Nav.Item>
              <a>Blog</a>
            </Nav.Item>
            <Nav.Item>
              <span>
                <Button>Tweet</Button>
              </span>
            </Nav.Item>
            <Nav.Item>
              <span>
                <Button color="primary">Download</Button>
              </span>
            </Nav.Item>
          </Nav.Right>
        </Nav>
      )}
    </Toggler>,
  )
  .add('Modifiers', () =>
    <Toggler>
      {(toggle, value) => (
        <Nav shadow>
          <Container>
            <Nav.Left>
              <Nav.Item brand>
                <a>
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
                </a>
              </Nav.Item>
              <Nav.Item hiddenMobile tab active>
                <a>Home</a>
              </Nav.Item>
              <Nav.Item hiddenMobile tab>
                <a>Features</a>
              </Nav.Item>
              <Nav.Item hiddenMobile tab>
                <a>Pricing</a>
              </Nav.Item>
              <Nav.Item hiddenMobile tab>
                <a>About</a>
              </Nav.Item>
            </Nav.Left>
            <Nav.Toggle onClick={toggle} />
            <Nav.Right menu active={value}>
              <Nav.Item hiddenTablet tab active>
                <a>Home</a>
              </Nav.Item>
              <Nav.Item hiddenTablet tab>
                <a>Features</a>
              </Nav.Item>
              <Nav.Item hiddenTablet tab>
                <a>Pricing</a>
              </Nav.Item>
              <Nav.Item hiddenTablet tab>
                <a>About</a>
              </Nav.Item>
              <Nav.Item tab>
                <a>Profile</a>
              </Nav.Item>
              <Nav.Item tab>
                <a>Log out</a>
              </Nav.Item>
            </Nav.Right>
          </Container>
        </Nav>
      )}
    </Toggler>,
  );
