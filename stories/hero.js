import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Hero, Tabs, Title, Subtitle } from '../src/';

storiesOf('Hero', module)
  .add('Hero', () =>
    <Hero>
      <Hero.Body>
        <Container>
          <Title>Hero title</Title>
          <Subtitle>Hero subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>,
  )
  .add('Colors', () =>
    <div>
      <Hero color="primary">
        <Hero.Body>
          <Container>
            <Title>Primary title</Title>
            <Subtitle>Primary subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="info">
        <Hero.Body>
          <Container>
            <Title>Info title</Title>
            <Subtitle>Info subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="success">
        <Hero.Body>
          <Container>
            <Title>Success title</Title>
            <Subtitle>Success subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="warning">
        <Hero.Body>
          <Container>
            <Title>Warning title</Title>
            <Subtitle>Warning subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="danger">
        <Hero.Body>
          <Container>
            <Title>Danger title</Title>
            <Subtitle>Danger subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="light">
        <Hero.Body>
          <Container>
            <Title>Light title</Title>
            <Subtitle>Light subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="dark">
        <Hero.Body>
          <Container>
            <Title>Dark title</Title>
            <Subtitle>Dark subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
    </div>,
  )
  .add('Sizes', () =>
    <div>
      <Hero size="medium" color="primary">
        <Hero.Body>
          <Container>
            <Title>Medium title</Title>
            <Subtitle>Medium subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero size="large" color="info">
        <Hero.Body>
          <Container>
            <Title>Large title</Title>
            <Subtitle>Large subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
    </div>,
  )
  .add('Gradient', () =>
    <div>
      <Hero color="primary" bold>
        <Hero.Body>
          <Container>
            <Title>Primary title</Title>
            <Subtitle>Primary subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="info" bold>
        <Hero.Body>
          <Container>
            <Title>Info title</Title>
            <Subtitle>Info subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="success" bold>
        <Hero.Body>
          <Container>
            <Title>Success title</Title>
            <Subtitle>Success subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="warning" bold>
        <Hero.Body>
          <Container>
            <Title>Warning title</Title>
            <Subtitle>Warning subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="danger" bold>
        <Hero.Body>
          <Container>
            <Title>Danger title</Title>
            <Subtitle>Danger subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="light" bold>
        <Hero.Body>
          <Container>
            <Title>Light title</Title>
            <Subtitle>Light subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Hero color="dark" bold>
        <Hero.Body>
          <Container>
            <Title>Dark title</Title>
            <Subtitle>Dark subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
    </div>,
  )
  .add('Fullheight', () =>
    <Hero fullheight>
      <Hero.Body>
        <Container>
          <Title>Hero title</Title>
          <Subtitle>Hero subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>,
  )
  .add('With Nav and Tabs', () =>
    <Hero color="info">
      <Hero.Body>
        <Container textCentered>
          <Title>Hero title</Title>
          <Subtitle>Hero subtitle</Subtitle>
        </Container>
      </Hero.Body>
      <Hero.Footer>
        <Tabs boxed centered>
          <Tabs.Tab active><a>Overview</a></Tabs.Tab>
          <Tabs.Tab><a>Modifiers</a></Tabs.Tab>
          <Tabs.Tab><a>Components</a></Tabs.Tab>
          <Tabs.Tab><a>Grid</a></Tabs.Tab>
          <Tabs.Tab><a>Elements</a></Tabs.Tab>
          <Tabs.Tab><a>Layout</a></Tabs.Tab>
        </Tabs>
      </Hero.Footer>
    </Hero>,
  );
