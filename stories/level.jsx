import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Button, Container, Heading, Level, Subtitle, Title } from '../src/';

storiesOf('Level', module)
  .addDecorator(story =>
    <Container>
      {story()}
    </Container>,
  )
  .add('Level', () =>
    <Level>
      <Level.Left>
        <Level.Item>
          <Subtitle><strong>123</strong> posts</Subtitle>
        </Level.Item>
      </Level.Left>
      <Level.Right>
        <Level.Item><strong>All</strong></Level.Item>
        <Level.Item><a>Published</a></Level.Item>
        <Level.Item><a>Drafts</a></Level.Item>
        <Level.Item><a>Deleted</a></Level.Item>
        <Level.Item><Button color="success">New</Button></Level.Item>
      </Level.Right>
    </Level>,
  )
  .add('Centered', () =>
    <div>
      <Block>
        <Level>
          <Level.Item>
            <a>Home</a>
          </Level.Item>
          <Level.Item>
            <a>Menu</a>
          </Level.Item>
          <Level.Item>
            <img src="http://bulma.io/images/bulma-type.png" alt="" style={{ height: '30px' }} />
          </Level.Item>
          <Level.Item>
            <a>Reservations</a>
          </Level.Item>
          <Level.Item>
            <a>Contact</a>
          </Level.Item>
        </Level>
      </Block>
      <Block>
        <Level>
          <Level.Item textCentered>
            <div>
              <Heading>Tweets</Heading>
              <Title>1337</Title>
            </div>
          </Level.Item>
          <Level.Item textCentered>
            <div>
              <Heading>Following</Heading>
              <Title>13</Title>
            </div>
          </Level.Item>
          <Level.Item textCentered>
            <div>
              <Heading>Followers</Heading>
              <Title>42 000</Title>
            </div>
          </Level.Item>
          <Level.Item textCentered>
            <div>
              <Heading>Likes</Heading>
              <Title>666</Title>
            </div>
          </Level.Item>
        </Level>
      </Block>
    </div>,
  )
  .add('Mobile', () =>
    <Level mobile>
      <Level.Item textCentered>
        <div>
          <Heading>Tweets</Heading>
          <Title>1337</Title>
        </div>
      </Level.Item>
      <Level.Item textCentered>
        <div>
          <Heading>Following</Heading>
          <Title>13</Title>
        </div>
      </Level.Item>
      <Level.Item textCentered>
        <div>
          <Heading>Followers</Heading>
          <Title>42 000</Title>
        </div>
      </Level.Item>
      <Level.Item textCentered>
        <div>
          <Heading>Likes</Heading>
          <Title>666</Title>
        </div>
      </Level.Item>
    </Level>,
  );
