import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Addons, Container, Button, Field, Group, Icon, Notification } from '../src/';

function buttons(props, text) {
  return [
    <Button control key="default" {...props}>{text}</Button>,
    <Button control key="primary" {...props} color="primary">{text}</Button>,
    <Button control key="info" {...props} color="info">{text}</Button>,
    <Button control key="success" {...props} color="success">{text}</Button>,
    <Button control key="danger" {...props} color="danger">{text}</Button>,
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
      <Group centered>
        <Button control>Button</Button>
        <Button control color="white">White</Button>
        <Button control color="light">Light</Button>
        <Button control color="dark">Dark</Button>
        <Button control color="black">Black</Button>
        <Button control color="link">Link</Button>
      </Group>
      <Group centered>
        <Button control color="primary">Primary</Button>
        <Button control color="info">Info</Button>
        <Button control color="success">Success</Button>
        <Button control color="warning">Warning</Button>
        <Button control color="danger">Danger</Button>
      </Group>
    </div>,
  )
  .add('Sizes', () =>
    <Group centered>
      <Button control size="small">Small</Button>
      <Button control>Normal</Button>
      <Button control size="medium">Medium</Button>
      <Button control size="large">Large</Button>
    </Group>,
  )
  .add('Outlined', () =>
    <Group centered>
      {buttons({ outlined: true }, 'Outlined')}
    </Group>,
  )
  .add('Inverted', () =>
    <Notification color="primary">
      <Group centered>
        {buttons({ inverted: true }, 'Inverted').slice(1)}
      </Group>
    </Notification>,
  )
  .add('Inverted and outlined', () =>
    <Notification color="primary">
      <Group centered>
        {buttons({ inverted: true, outlined: true }, 'Inverted').slice(1)}
      </Group>
    </Notification>,
  )
  .add('Fullwidth', () =>
    <div>
      {buttons({ fullWidth: true }, 'Fullwidth').map((b, index) => <Field key={index}>{b}</Field>)}
    </div>,
  )
  .add('Disabled', () =>
    <Group centered>
      {buttons({ disabled: true }, 'Disabled')}
    </Group>,
  )
  .add('Active', () =>
    <Group centered>
      {buttons({ active: true }, 'Active')}
    </Group>,
  )
  .add('Loading', () =>
    <Group centered>
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
        <Button control>
          <Icon size="small" icon="header" />
        </Button>
        <Button control>
          <Icon icon="header" />
        </Button>
      </Group>
      <Group>
        <Button control size="medium">
          <Icon size="small" icon="header" />
        </Button>
        <Button control size="medium">
          <Icon icon="header" />
        </Button>
        <Button control size="medium">
          <Icon size="medium" icon="header" />
        </Button>
      </Group>
      <Group textCentered>
        <Button control size="large">
          <Icon size="small" icon="header" />
        </Button>
        <Button control size="large">
          <Icon icon="header" />
        </Button>
        <Button control size="large">
          <Icon size="medium" icon="header" />
        </Button>
        <Button control size="large">
          <Icon size="large" icon="header" />
        </Button>
      </Group>
    </div>,
  )
  .add('Button group', () =>
    <Group centered>
      <Button control color="primary">Save changes</Button>
      <Button control>Cancel</Button>
      <Button control color="danger">Delete</Button>
    </Group>,
  )
  .add('Button addons', () =>
    <Addons centered>
      <Button control>
        <Icon icon="align-left" size="small" />
        <span>
          Left
        </span>
      </Button>
      <Button control>
        <Icon icon="align-center" size="small" />
        <span>Center</span>
      </Button>
      <Button control>
        <Icon icon="align-right" size="small" />
        <span>Right</span>
      </Button>
    </Addons>,
  )
  .add('Fullwidth addons', () =>
    <Addons centered fullWidth>
      <Button control fullWidth>
        <Icon icon="align-left" size="small" />
        <span>
          Left
        </span>
      </Button>
      <Button control fullWidth>
        <Icon icon="align-center" size="small" />
        <span>Center</span>
      </Button>
      <Button control fullWidth>
        <Icon icon="align-right" size="small" />
        <span>Right</span>
      </Button>
    </Addons>,
  )
  .add('Button group with addons', () =>
    <Group centered>
      <Addons>
        <Button control>
          <Icon icon="bold" size="small" />
          <span>Bold</span>
        </Button>
        <Button control>
          <Icon icon="italic" size="small" />
          <span>Italic</span>
        </Button>
        <Button control>
          <Icon icon="underline" size="small" />
          <span>Underline</span>
        </Button>
      </Addons>
      <Addons>
        <Button control>
          <Icon icon="align-left" size="small" />
          <span>Left</span>
        </Button>
        <Button control>
          <Icon icon="align-center" size="small" />
          <span>Center</span>
        </Button>
        <Button control>
          <Icon icon="align-right" size="small" />
          <span>Right</span>
        </Button>
      </Addons>
    </Group>,
  );
