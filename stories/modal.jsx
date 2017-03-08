import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Box, Button, Content, ImageContainer, Media, Modal } from '../src/';
import Toggler from './Toggler';

storiesOf('Modal', module)
  .add('Modal', () =>
    <Toggler>
      {(toggle, value) => (
        <div>
          <Button onClick={toggle}>Launch modal</Button>
          {value &&
            <Modal onClose={toggle}>
              <Box>
                <Media>
                  <Media.Left>
                    <ImageContainer dimension="64x64">
                      <img src="http://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
                    </ImageContainer>
                  </Media.Left>
                  <Media.Content>
                    <Content>
                      <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean efficitur sit amet massa fringilla egestas.
                        Nullam condimentum luctus turpis.
                      </p>
                    </Content>
                  </Media.Content>
                </Media>
              </Box>
            </Modal>
          }
        </div>
      )}
    </Toggler>,
  )
  .add('Classic', () =>
    <Toggler>
      {(toggle, value) => (
        <div>
          <Button onClick={toggle}>Launch modal</Button>
          {value &&
            <Modal onClose={toggle} classic>
              <Modal.Header onClose={toggle}>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                One fine body...
              </Modal.Body>
              <Modal.Footer>
                <Button color="success">Save changes</Button>
                <Button onClick={toggle}>Close</Button>
              </Modal.Footer>
            </Modal>
          }
        </div>
      )}
    </Toggler>,
  );
