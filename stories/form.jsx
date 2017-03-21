import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Addons, Button, Control, Container, Field, Form, Help, Icon, Input, Label, Radio, Group, Horizontal, Checkbox, Select, Textarea } from '../src/';

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
      <Field>
        <Label>Name</Label>
        <Input control placeholder="Text input" />
      </Field>
      <Field>
      <Label>Username</Label>
        <Control icon iconRight>
          <Input color="success" placeholder="Text input" defaultValue="rulma" />
          <Icon icon="check" size="small" />
          <Help color="success">The username is available</Help>
        </Control>
      </Field>
      <Field>
        <Label>Email</Label>
        <Control icon iconRight>
          <Input color="danger" placeholder="Email input" defaultValue="hello@" type="email" />
          <Icon icon="warning" size="small" />
          <Help color="danger">The email is invalid</Help>
        </Control>
      </Field>
      <Field>
        <Label>Subject</Label>
        <Select control>
          {options}
        </Select>
      </Field>
      <Field>
        <Label>Message</Label>
        <Textarea control placeholder="Textarea" />
      </Field>
      <Field>
        <Checkbox id="remember" control>Remember me</Checkbox>
      </Field>
      <Field>
        <Control>
          <Radio id="radio1" name="question">Yes</Radio>
          <Radio id="radio2" name="question">No</Radio>
        </Control>
      </Field>
      <Field grouped>
        <Button control color="primary" type="submit">Submit</Button>
        <Button control color="link">Cancel</Button>
      </Field>
    </div>,
  )
  .add('Colors', () =>
    <Form>
      <Field>
        <Input
          control
          color="primary"
          placeholder="Primary input"
        />
      </Field>
      <Field>
        <Input
          control
          color="info"
          placeholder="Info input"
        />
      </Field>
      <Field>
        <Input
          control
          color="success"
          placeholder="Success input"
        />
      </Field>
      <Field>
        <Input
          control
          color="warning"
          placeholder="Warning input"
        />
      </Field>
      <Field>
      <Input
        control
        color="danger"
        placeholder="Danger input"
      />
      </Field>
    </Form>,
  )
  .add('Sizes', () =>
    <Form>
      <Field>
        <Input
          control
          placeholder="Small input"
          size="small"
        />
      </Field>
      <Field>
        <Input
          control
          placeholder="Default input"
        />
      </Field>
      <Field>
        <Input
          control
          placeholder="Medium input"
          size="medium"
        />
      </Field>
      <Field>
        <Input
          control
          placeholder="Large input"
          size="large"
        />
      </Field>
      <Field>
        <Select control size="small">
          {options}
        </Select>
      </Field>
      <Field>
        <Select control>
          {options}
        </Select>
      </Field>
      <Field>
        <Select control size="medium">
          {options}
        </Select>
      </Field>
      <Field>
        <Select control size="large">
          {options}
        </Select>
      </Field>
    </Form>,
  )
  .add('Loading', () =>
    <div>
      <Field>
        <Control loading>
          <Input placeholder="Loading input" />
        </Control>
      </Field>
      <Field>
        <Control loading>
          <Textarea placeholder="Loading textarea" />
        </Control>
      </Field>
    </div>,
  )
  .add('Disabled', () =>
    <div>
      <Field>
        <Input control disabled placeholder="Disabled input" />
      </Field>
      <Field>
        <Textarea control disabled placeholder="Disabled textarea" />
      </Field>
      <Field>
        <Checkbox control disabled>Remember me</Checkbox>
      </Field>
      <Field>
        <Control>
          <Radio name="question" disabled>Yes</Radio>
          <Radio name="question" disabled>No</Radio>
        </Control>
      </Field>
      <Field grouped>
        <Button control disabled color="primary" type="submit">Submit</Button>
        <Button control disabled>Cancel</Button>
      </Field>
    </div>,
  )
  .add('Icons', () =>
    <div>
      <Field>
        <Control icon>
          <Input placeholder="Email" type="email" />
          <Icon icon="envelope" size="small" />
        </Control>
      </Field>
      <Field>
        <Control icon>
          <Input placeholder="Password" type="password" />
          <Icon icon="lock" size="small" />
        </Control>
      </Field>
      <Field>
        <Button control color="success">Login</Button>
      </Field>
    </div>,
  )
  .add('Icons right', () =>
    <div>
      <Field>
        <Control icon iconRight>
          <Input placeholder="Email" type="email" size="small" />
          <Icon icon="check" size="small" />
        </Control>
      </Field>
      <Field>
        <Control icon iconRight>
          <Input placeholder="Email" type="email" />
          <Icon icon="check" />
        </Control>
      </Field>
      <Field>
        <Control icon iconRight>
          <Input placeholder="Email" type="email" size="medium" />
          <Icon icon="check" size="medium" />
        </Control>
      </Field>
      <Field>
        <Control icon iconRight>
          <Input placeholder="Email" type="email" size="large" />
          <Icon icon="check" size="large" />
        </Control>
      </Field>
    </div>,
  )
  .add('Addons', () =>
    <div>
      <Addons>
        <Input control placeholder="Find repository" />
        <Button control color="info">Search</Button>
      </Addons>
      <Addons centered>
        <Input control placeholder="Find repository" />
        <Button control color="info">Search</Button>
      </Addons>
      <Addons right>
        <Input control placeholder="Find repository" />
        <Button control color="info">Search</Button>
      </Addons>
    </div>,
  )
  .add('Expanded addons', () =>
    <div>
      <Addons>
        <Select control>
          <option>$</option>
          <option>€</option>
          <option>£</option>
        </Select>
        <Input control expanded placeholder="Amount of money" />
        <Button control>Transfer</Button>
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
        <Label field>From</Label>
        <Group>
          <Input control expanded placeholder="Name" />
          <Control expanded>
            <Input placeholder="Email" />
            <Help color="success">The email is correct</Help>
          </Control>
        </Group>
      </Horizontal>
      <Horizontal>
        <Label field>Subject</Label>
        <Select fullWidth control>
          {options}
        </Select>
      </Horizontal>
      <Horizontal>
        <Label field>Question</Label>
        <Textarea control placeholder="How can we help you?" />
      </Horizontal>
    </div>,
  );
