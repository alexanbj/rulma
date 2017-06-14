import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Container, Column, Columns, Notification } from '../src/';

const cols = [
  <Column key="1">
    <Notification color="info">First</Notification>
  </Column>,
  <Column key="2">
    <Notification color="success">Second</Notification>
  </Column>,
  <Column key="3">
    <Notification color="warning">Third</Notification>
  </Column>,
  <Column key="4">
    <Notification color="danger">Fourth</Notification>
  </Column>,
];

storiesOf('Columns', module)
  .addDecorator(story =>
    <Container>
      {story()}
    </Container>,
  )
  .add('Columns', () =>
    <Columns>
      {cols}
    </Columns>,
  )
  .add('Sizes', () =>
    <div>
      <Columns>
        <Column size="3/4">
          <Notification color="info">3/4</Notification>
        </Column>
        <Column>
          <Notification color="warning">Auto</Notification>
        </Column>
        <Column>
          <Notification color="danger">Auto</Notification>
        </Column>
      </Columns>
      <Columns>
        <Column size="2/3">
          <Notification color="info">2/3</Notification>
        </Column>
        <Column>
          <Notification color="warning">Auto</Notification>
        </Column>
        <Column>
          <Notification color="danger">Auto</Notification>
        </Column>
      </Columns>
      <Columns>
        <Column size="1/2">
          <Notification color="info">1/2</Notification>
        </Column>
        <Column>
          <Notification color="warning">Auto</Notification>
        </Column>
        <Column>
          <Notification color="danger">Auto</Notification>
        </Column>
      </Columns>
      <Columns>
        <Column size="1/3">
          <Notification color="info">2/3</Notification>
        </Column>
        <Column>
          <Notification color="warning">Auto</Notification>
        </Column>
        <Column>
          <Notification color="danger">Auto</Notification>
        </Column>
      </Columns>
      <Columns>
        <Column size="1/4">
          <Notification color="info">1/4</Notification>
        </Column>
        <Column>
          <Notification color="warning">Auto</Notification>
        </Column>
        <Column>
          <Notification color="danger">Auto</Notification>
        </Column>
      </Columns>
    </div>,
  )
  .add('12 columns', () =>
    <div>
      <Columns>
        <Column size="8">
          <Notification color="info">8</Notification>
        </Column>
        <Column>
          <Notification color="success">1</Notification>
        </Column>
        <Column>
          <Notification color="warning">1</Notification>
        </Column>
        <Column>
          <Notification color="success">1</Notification>
        </Column>
        <Column>
          <Notification color="success">1</Notification>
        </Column>
      </Columns>
    </div>,
  )
  .add('Responsiveness', () =>
    <div>
      Desktop (stacks on tablets and mobile)
      <Columns responsive="desktop">
        {cols}
      </Columns>
      Default (stacks on mobile only)
      <Columns>
        {cols}
      </Columns>
      Mobile (never stacks)
      <Columns responsive="mobile">
        {cols}
      </Columns>
    </div>,
  )
  .add('Multiline', () =>
    <Columns multiline>
      {cols}
      {cols}
      {cols}
      {cols}
      {cols}
      {cols}
    </Columns>,
  )
  .add('Offsets', () =>
    <div>
      <Columns>
        <Column size="1/2" offset="1/4">
          <Notification color="info">1/2 with a 1/4 offset</Notification>
        </Column>
      </Columns>
      <Columns>
        <Column size="4" offset="8">
          <Notification color="info">4 cols with 8 cols offset</Notification>
        </Column>
      </Columns>
      <Columns>
        <Column size="11" offset="1">
          <Notification color="info">11 cols with 1 col offset</Notification>
        </Column>
      </Columns>
    </div>,
  )
  .add('Gapless', () =>
    <Columns gapless>
      <Column>
        <Notification color="info">First</Notification>
      </Column>
      <Column>
        <Notification color="success">Second</Notification>
      </Column>
      <Column>
        <Notification color="warning">Third</Notification>
      </Column>
      <Column>
        <Notification color="danger">Fourth</Notification>
      </Column>
    </Columns>,
  )
  .add('Narrow column', () =>
    <Columns>
      <Column narrow>
        <Box style={{ width: '200px' }}>
          <p>This is a narrow column</p>
          <p>This is only 200 pixels wide</p>
        </Box>
      </Column>
      <Column>
        <Box>
          <p>Flexible column</p>
          <p>This will fill up all the remaining space</p>
        </Box>
      </Column>
    </Columns>,
  );
