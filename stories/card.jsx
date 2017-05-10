import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {
  Card,
  Columns,
  Column,
  Content,
  Container,
  Media,
  Icon,
  ImageContainer,
  Subtitle,
  Title,
} from '../src/';

storiesOf('Card', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Card', () => (
    <Columns>
      <Column size="1/3" offset="1/3">
        <Card>
          <Card.Image>
            <ImageContainer ratio="4by3">
              <img src="http://bulma.io/images/placeholders/1280x960.png" alt="img" />
            </ImageContainer>
          </Card.Image>
          <Card.Content>
            <Media>
              <Media.Left>
                <ImageContainer dimension="48x48">
                  <img src="http://bulma.io/images/placeholders/96x96.png" alt="img" />
                </ImageContainer>
              </Media.Left>
              <Media.Content>
                <Title size="4">John Smith</Title>
                <Subtitle size="6">@johnsmith</Subtitle>
              </Media.Content>
            </Media>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
              <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </Content>
          </Card.Content>
        </Card>
      </Column>
    </Columns>
  ))
  .add('Header and footer', () => (
    <Card>
      <Card.Header as="header" title="Component">
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
      <Card.Footer as="footer">
        <Card.Footer.Item as="a">
          Save
        </Card.Footer.Item>
        <Card.Footer.Item as="a">
          Edit
        </Card.Footer.Item>
        <Card.Footer.Item as="a">
          Delete
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  ));
