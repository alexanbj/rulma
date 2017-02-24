import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Addons, Container, Button, Group, Icon, Notification } from '../src/';

function buttons(props, text) {
  return [
    <Button key="default" {...props}>{text}</Button>,
    <Button key="primary" {...props} color="primary">{text}</Button>,
    <Button key="info" {...props} color="info">{text}</Button>,
    <Button key="success" {...props} color="success">{text}</Button>,
    <Button key="danger" {...props} color="danger">{text}</Button>,
  ];
}

storiesOf('Button', module)
  .addDecorator(story => (
    <Container textCentered>
      {story()}
    </Container>
  ))
  .add('Colors', () =>
    <div>
      <Group>
        <Button>Button</Button>
        <Button color="white">White</Button>
        <Button color="light">Light</Button>
        <Button color="dark">Dark</Button>
        <Button color="black">Black</Button>
        <Button color="link">Link</Button>
      </Group>
      <Group>
        <Button color="primary">Primary</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </Group>
    </div>,
  )
  .add('Sizes', () =>
    <Group>
      <Button size="small">Small</Button>
      <Button>Normal</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Group>,
  )
  .add('Outlined', () =>
    <Group>
      {buttons({ outlined: true }, 'Outlined')}
    </Group>,
  )
  .add('Inverted', () =>
    <Notification color="primary">
      <Group>
        {buttons({ inverted: true }, 'Inverted').slice(1)}
      </Group>
    </Notification>,
  )
  .add('Inverted and outlined', () =>
    <Notification color="primary">
      <Group textCentered>
        {buttons({ inverted: true, outlined: true }, 'Inverted').slice(1)}
      </Group>
    </Notification>,
  )
  .add('Fullwidth', () =>
    <div>
      {buttons({ fullWidth: true }, 'Fullwidth')}
    </div>,
  )
  .add('Disabled', () =>
    <Group>
      {buttons({ disabled: true }, 'Disabled')}
    </Group>,
  )
  .add('Active', () =>
    <Group>
      {buttons({ active: true }, 'Active')}
    </Group>,
  )
  .add('Loading', () =>
    <Group>
      {buttons({ loading: true }, 'Loading')}
    </Group>,
  )
  .add('Icons only', () =>
    <div>
      <Group>
        <Button size="small">
          <Icon size="small" icon="header" />
        </Button>
      </Group>
      <Group>
        <Button>
          <Icon size="small" icon="header" />
        </Button>
        <Button>
          <Icon icon="header" />
        </Button>
      </Group>
      <Group>
        <Button size="medium">
          <Icon size="small" icon="header" />
        </Button>
        <Button size="medium">
          <Icon icon="header" />
        </Button>
        <Button size="medium">
          <Icon size="medium" icon="header" />
        </Button>
      </Group>
      <Group textCentered>
        <Button size="large">
          <Icon size="small" icon="header" />
        </Button>
        <Button size="large">
          <Icon icon="header" />
        </Button>
        <Button size="large">
          <Icon size="medium" icon="header" />
        </Button>
        <Button size="large">
          <Icon size="large" icon="header" />
        </Button>
      </Group>
    </div>,
  )
  .add('Button group', () =>
    <Group>
      <Button color="primary">Save changes</Button>
      <Button>Cancel</Button>
      <Button color="danger">Delete</Button>
    </Group>,
  )
  .add('Button addons', () =>
    <Addons>
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
    </Addons>,
  )
  .add('Button group with addons', () =>
    <Group>
      <Addons>
        <Button>Bold</Button>
        <Button>Italic</Button>
        <Button>Underline</Button>
      </Addons>
      <Addons right>
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </Addons>
    </Group>,
  );
