import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Box, Button, Modal } from '../src/';

const onHide = action('onHide');

storiesOf('Modal', module)
  .add('Classic', () =>
    <Modal onHide={onHide}>
      <Modal.Header onHide={onHide}>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        One fine body...
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
        <Button color="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>,
  )
  .add('Fancy', () =>
    <Modal onHide={onHide} classic={false}>
      <Button color="danger">
        Lorem ipsum something
      </Button>
    </Modal>,
  );
