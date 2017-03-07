import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Addons, Button, Control, Container, Form, Help, Icon, Input, Label, Radio, Group, Horizontal, Checkbox, Select, Textarea } from '../src/';

const options = [
  <option key="1">Select dropdown</option>,
  <option key="2">with options</option>,
];

storiesOf('Form', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Form', () =>
    <div>
      <Label>Name</Label>
      <Input control placeholder="Text input" />
      <Label>Username</Label>
      <Control icon iconRight>
        <Input color="success" placeholder="Text input" defaultValue="rulma" />
        <Icon icon="check" size="small" />
        <Help color="success">The username is available</Help>
      </Control>
      <Label>Email</Label>
      <Control icon iconRight>
        <Input color="danger" placeholder="Email input" defaultValue="hello@" type="email" />
        <Icon icon="warning" size="small" />
        <Help color="danger">The email is invalid</Help>
      </Control>
      <Label>Subject</Label>
      <Select control>
        {options}
      </Select>
      <Label>Message</Label>
      <Textarea control placeholder="Textarea" />
      <Checkbox id="remember" control>Remember me</Checkbox>
      <Control>
        <Radio id="radio1" name="question">Yes</Radio>
        <Radio id="radio2" name="question">No</Radio>
      </Control>
      <Button color="primary" type="submit">Submit</Button>
      <Button color="link">Cancel</Button>
    </div>,
  )
  .add('Colors', () =>
    <Form>
      <Input
        control
        color="primary"
        placeholder="Primary input"
      />
      <Input
        control
        color="info"
        placeholder="Info input"
      />
      <Input
        control
        color="success"
        placeholder="Success input"
      />
      <Input
        control
        color="warning"
        placeholder="Warning input"
      />
      <Input
        control
        color="danger"
        placeholder="Danger input"
      />
    </Form>,
  )
  .add('Sizes', () =>
    <Form>
      <Input
        control
        placeholder="Small input"
        size="small"
      />
      <Input
        control
        placeholder="Default input"
      />
      <Input
        control
        placeholder="Medium input"
        size="medium"
      />
      <Input
        control
        placeholder="Large input"
        size="large"
      />
      <Select control size="small">
        {options}
      </Select>
      <Select control>
        {options}
      </Select>
      <Select control size="medium">
        {options}
      </Select>
      <Select control size="large">
        {options}
      </Select>
    </Form>,
  )
  .add('Loading', () =>
    <div>
      <Control loading>
        <Input placeholder="Loading input" />
      </Control>
      <Control loading>
        <Textarea placeholder="Loading textarea" />
      </Control>
    </div>,
  )
  .add('Disabled', () =>
    <div>
      <Input control disabled placeholder="Disabled input" />
      <Textarea control disabled placeholder="Disabled textarea" />
      <Checkbox control disabled>Remember me</Checkbox>
      <Control>
        <Radio name="question" disabled>Yes</Radio>
        <Radio name="question" disabled>No</Radio>
      </Control>
      <Button disabled color="primary" type="submit">Submit</Button>
      <Button disabled color="link">Cancel</Button>
    </div>,
  )
  .add('Icons', () =>
    <div>
      <Control icon>
        <Input placeholder="Email" type="email" />
        <Icon icon="envelope" size="small" />
      </Control>
      <Control icon>
        <Input placeholder="Password" type="password" />
        <Icon icon="lock" size="small" />
      </Control>
      <Button color="success">Login</Button>
    </div>,
  )
  .add('Icons right', () =>
    <div>
      <Control icon iconRight>
        <Input placeholder="Email" type="email" size="small" />
        <Icon icon="check" size="small" />
      </Control>
      <Control icon iconRight>
        <Input placeholder="Email" type="email" />
        <Icon icon="check" />
      </Control>
      <Control icon iconRight>
        <Input placeholder="Email" type="email" size="medium" />
        <Icon icon="check" size="medium" />
      </Control>
      <Control icon iconRight>
        <Input placeholder="Email" type="email" size="large" />
        <Icon icon="check" size="large" />
      </Control>
    </div>,
  )
  .add('Addons', () =>
    <div>
      <Addons>
        <Input placeholder="Find repository" />
        <Button color="info">Search</Button>
      </Addons>
      <Addons centered>
        <Input placeholder="Find repository" />
        <Button color="info">Search</Button>
      </Addons>
      <Addons right>
        <Input placeholder="Find repository" />
        <Button color="info">Search</Button>
      </Addons>
    </div>,
  )
  .add('Expanded addons', () =>
    <div>
      <Addons>
        <Select>
          <option>$</option>
          <option>€</option>
          <option>£</option>
        </Select>
        <Input expanded placeholder="Amount of money" />
        <Button>Transfer</Button>
      </Addons>
    </div>,
  )
  .add('Form group', () =>
    <Group>
      <Input control expanded placeholder="Find repository" />
      <Button color="info">Search</Button>
    </Group>,
  )
  .add('Horizontal form', () =>
    <div>
      <Horizontal>
        <Label control>From</Label>
        <Group>
          <Input control expanded placeholder="Name" />
          <Input control expanded placeholder="Email" />
        </Group>
      </Horizontal>
      <Horizontal>
        <Label control>Subject</Label>
        <Select fullWidth control>
          {options}
        </Select>
      </Horizontal>
      <Horizontal>
        <Label control>Question</Label>
        <Textarea control placeholder="How can we help you?" />
      </Horizontal>
    </div>,
  );
