import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Addons, Button, Control, Container, Form, Group } from '../src/';


storiesOf('Form', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Form', () =>
    <div>
      <Form.Label>Name</Form.Label>
      <Form.Input placeholder="Text input" />
      <Form.Label>Username</Form.Label>
      <Form.Input placeholder="Text input" value="lin" />
      <Form.Help color="success">The username is available</Form.Help>
      <Form.Label>Message</Form.Label>
      <Form.Textarea placeholder="Textarea" />
      <Button color="primary" type="submit">Submit</Button>
      <Button color="link">Cancel</Button>
    </div>,
  )
  .add('Colors', () =>
    <Form>
      <Form.Input
        color="primary"
        placeholder="Primary input"
      />
      <Form.Input
        color="info"
        placeholder="Info input"
      />
      <Form.Input
        color="success"
        placeholder="Success input"
      />
      <Form.Input
        color="warning"
        placeholder="Warning input"
      />
      <Form.Input
        color="danger"
        placeholder="Danger input"
      />
    </Form>,
  )
  .add('Sizes', () =>
    <Form>
      <Form.Input
        placeholder="Small input"
        size="small"
      />
      <Form.Input
        placeholder="Default input"
      />
      <Form.Input
        placeholder="Medium input"
        size="medium"
      />
      <Form.Input
        placeholder="Large input"
        size="large"
      />
    </Form>,
  )
  .add('Disabled', () =>
    <div>
      <Form.Input disabled placeholder="Disabled input" />
      <Form.Textarea disabled placeholder="Disabled textarea" />
      <Button disabled color="primary" type="submit">Submit</Button>
      <Button disabled color="link">Cancel</Button>
    </div>,
  )
  .add('Addons', () =>
    <div>
      <Addons>
        <Form.Input placeholder="Find repository" />
        <Button color="info">Search</Button>
      </Addons>
      <Addons centered>
        <Form.Input placeholder="Find repository" />
        <Button color="info">Search</Button>
      </Addons>
      <Addons right>
        <Form.Input placeholder="Find repository" />
        <Button color="info">Search</Button>
      </Addons>
    </div>,
  )
  .add('Form group', () =>
    <Group>
      Control test
      <Control expanded>
        <Form.Input placeholder="Find repository" />
      </Control>
      <Button color="info">Search</Button>
    </Group>,
  )
  .add('Horizontal', () =>
    <Form.Horizontal>
      <Group>
        <Form.Input placeholder="Name" />
        <Form.Input placeholder="Email" />
      </Group>
    </Form.Horizontal>,
  );
