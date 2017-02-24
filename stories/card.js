import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Button, Card, Content, Container, Icon } from '../src/';

storiesOf('Card', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Card', () =>
    <Card>
      <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
        <br />
        <small>11:09 PM - 1 Jan 2016</small>
      </Card.Content>
    </Card>,
  )
  .add('Header and footer', () =>
    <Card>
      <Card.Header>
        <Card.Title>
          Component
        </Card.Title>
        <Card.Header.Icon>
          <a><Icon icon="angle-down" /></a>
        </Card.Header.Icon>
      </Card.Header>
      <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
        <br />
        <small>11:09 PM - 1 Jan 2016</small>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item>
          <a>Save</a>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <a>Edit</a>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <a>Delete</a>
        </Card.Footer.Item>
      </Card.Footer>
    </Card>,
  );
