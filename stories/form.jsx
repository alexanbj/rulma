import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Addons,
  Button,
  Control,
  Container,
  Field,
  Form,
  Help,
  Input,
  Label,
  Radio,
  Group,
  Checkbox,
  Select,
  Textarea,
} from '../src/';

const options = [<option key="1">Select dropdown</option>, <option key="2">with options</option>];

storiesOf('Form', module)
  .addDecorator(story =>
    <Container>
      {story()}
    </Container>,
  )
  .add('Form', () =>
    <div>
      <Field>
        <Label>Name</Label>
        <Input placeholder="Text input" />
      </Field>
      <Field>
        <Label>Username</Label>
        <Input
          iconLeft="user"
          iconRight="check"
          iconSize="small"
          color="success"
          placeholder="Text input"
          defaultValue="rulma"
        />
        <Help color="success">The username is available</Help>
      </Field>
      <Field>
        <Label>Email</Label>
        <Input
          color="danger"
          iconLeft="envelope"
          iconRight="warning"
          iconSize="small"
          placeholder="Email input"
          defaultValue="hello@"
          type="email"
        />
        <Help color="danger">The email is invalid</Help>
      </Field>
      <Field>
        <Label>Subject</Label>
        <Select>
          {options}
        </Select>
      </Field>
      <Field>
        <Label>Message</Label>
        <Textarea placeholder="Textarea" />
      </Field>
      <Field>
        <Checkbox id="remember">I agree to the <a href="#">terms and conditions</a></Checkbox>
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
        <Input color="primary" placeholder="Primary input" />
      </Field>
      <Field>
        <Input color="info" placeholder="Info input" />
      </Field>
      <Field>
        <Input color="success" placeholder="Success input" />
      </Field>
      <Field>
        <Input color="warning" placeholder="Warning input" />
      </Field>
      <Field>
        <Input color="danger" placeholder="Danger input" />
      </Field>
    </Form>,
  )
  .add('Sizes', () =>
    <Form>
      <Field>
        <Input placeholder="Small input" size="small" />
      </Field>
      <Field>
        <Input placeholder="Default input" />
      </Field>
      <Field>
        <Input placeholder="Medium input" size="medium" />
      </Field>
      <Field>
        <Input placeholder="Large input" size="large" />
      </Field>
      <Field>
        <Select size="small">
          {options}
        </Select>
      </Field>
      <Field>
        <Select>
          {options}
        </Select>
      </Field>
      <Field>
        <Select size="medium">
          {options}
        </Select>
      </Field>
      <Field>
        <Select size="large">
          {options}
        </Select>
      </Field>
    </Form>,
  )
  .add('Loading', () =>
    <div>
      <Field>
        <Input loading placeholder="Loading input" />
      </Field>
      <Field>
        <Textarea loading placeholder="Loading textarea" />
      </Field>
      <Field>
        <Select loading>
          {options}
        </Select>
      </Field>
    </div>,
  )
  .add('Disabled', () =>
    <div>
      <Field>
        <Input disabled placeholder="Disabled input" />
      </Field>
      <Field>
        <Textarea disabled placeholder="Disabled textarea" />
      </Field>
      <Field>
        <Checkbox disabled>Remember me</Checkbox>
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
        <Input iconLeft="envelope" iconSize="small" placeholder="Email" type="email" />
      </Field>
      <Field>
        <Input iconLeft="lock" iconSize="small" placeholder="Password" type="password" />
      </Field>
      <Field>
        <Button control color="success">Login</Button>
      </Field>
    </div>,
  )
  .add('Icons right', () =>
    <div>
      <Field>
        <Input iconRight="check" iconSize="small" placeholder="Email" type="email" size="small" />
      </Field>
      <Field>
        <Input iconRight="check" placeholder="Email" type="email" />
      </Field>
      <Field>
        <Input iconRight="check" iconSize="medium" placeholder="Email" type="email" size="medium" />
      </Field>
      <Field>
        <Input iconRight="check" iconSize="large" placeholder="Email" type="email" size="large" />
      </Field>
    </div>,
  )
  .add('Addons', () =>
    <div>
      <Addons>
        <Input placeholder="Find repository" />
        <Button control color="info">Search</Button>
      </Addons>
      <Addons centered>
        <Input placeholder="Find repository" />
        <Button control color="info">Search</Button>
      </Addons>
      <Addons right>
        <Input placeholder="Find repository" />
        <Button control color="info">Search</Button>
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
        <Button control>Transfer</Button>
      </Addons>
      <Addons>
        <Select expanded fullWidth>
          <option value="Norway">Norway</option>
          <option value="Sweden">Sweden</option>
          <option value="Denmark">Denmark</option>
        </Select>
        <Button control color="primary">Choose</Button>
      </Addons>
    </div>,
  )
  .add('Form group', () =>
    <Group>
      <Input expanded placeholder="Find repository" />
      <Button color="info">Search</Button>
    </Group>,
  )
  .add('Horizontal form', () =>
    <div>
      <Field horizontal>
        <Label field>From</Label>
        <Field.Body>
          <Field grouped>
            <Input expanded placeholder="Name" />
          </Field>
          <Field>
            <Input expanded placeholder="Email" />
            <Help color="success">The email is correct</Help>
          </Field>
        </Field.Body>
      </Field>
      <Field horizontal>
        <Label field>Department</Label>
        <Field.Body>
          <Select fullWidth>
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </Select>
        </Field.Body>
      </Field>
      <Field horizontal>
        <Label field>Already a member?</Label>
        <Field.Body>
          <Field narrow>
            <Control>
              <Radio>Yes</Radio>
              <Radio>No</Radio>
            </Control>
          </Field>
        </Field.Body>
      </Field>
      <Field horizontal>
        <Label field>Subject</Label>
        <Field.Body>
          <Field>
            <Input color="danger" placeholder="e.g. Partnership opportunity" />
            <Help color="danger">This field is required</Help>
          </Field>
        </Field.Body>
      </Field>
      <Field horizontal>
        <Label field>Question</Label>
        <Field.Body>
          <Field>
            <Textarea placeholder="How can we help you?" />
          </Field>
        </Field.Body>
      </Field>
      <Field horizontal>
        <Field.Label />
        <Field.Body>
          <Field>
            <Button control color="primary">Send message</Button>
          </Field>
        </Field.Body>
      </Field>
    </div>,
  )
  .add('Vertical label alignment', () =>
    <div>
      <Field horizontal>
        <Label field>No padding</Label>
        <Field.Body>
          <Field>
            <Checkbox>Checkbox</Checkbox>
          </Field>
        </Field.Body>
      </Field>
      <Field horizontal>
        <Label field>Small padding</Label>
        <Field.Body>
          <Field>
            <Input size="small" placeholder="Small sized input" />
          </Field>
        </Field.Body>
      </Field>
      <Field horizontal>
        <Label field>Normal label</Label>
        <Field.Body>
          <Field>
            <Input placeholder="Normal sized input" />
          </Field>
        </Field.Body>
      </Field>
      <Field horizontal>
        <Label field>Medium label</Label>
        <Field.Body>
          <Field>
            <Input size="medium" placeholder="Medium sized input" />
          </Field>
        </Field.Body>
      </Field>
      <Field horizontal>
        <Label field>Large label</Label>
        <Field.Body>
          <Field>
            <Input size="large" placeholder="Large sized input" />
          </Field>
        </Field.Body>
      </Field>
    </div>,
  );
