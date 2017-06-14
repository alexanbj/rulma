import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Tabs } from '../src/';

const tabs = [
  <Tabs.Tab active key="pictures">
    <a>Pictures</a>
  </Tabs.Tab>,
  <Tabs.Tab key="musc">
    <a>Music</a>
  </Tabs.Tab>,
  <Tabs.Tab key="videos">
    <a>Videos</a>
  </Tabs.Tab>,
  <Tabs.Tab key="documents">
    <a>Documents</a>
  </Tabs.Tab>,
];

storiesOf('Tabs', module)
  .addDecorator(story =>
    <Container>
      {story()}
    </Container>,
  )
  .add('Tabs', () =>
    <Tabs>
      {tabs}
    </Tabs>,
  )
  .add('Alignment', () =>
    <div>
      <Tabs centered>
        {tabs}
      </Tabs>
      <Tabs right>
        {tabs}
      </Tabs>
    </div>,
  )
  .add('Toggle', () =>
    <Tabs toggle>
      {tabs}
    </Tabs>,
  )
  .add('Fullwidth', () =>
    <Tabs fullWidth>
      {tabs}
    </Tabs>,
  )
  .add('Borders', () =>
    <Tabs boxed>
      {tabs}
    </Tabs>,
  )
  .add('Sizes', () =>
    <div>
      <Tabs size="small">
        {tabs}
      </Tabs>
      <Tabs>
        {tabs}
      </Tabs>
      <Tabs size="medium">
        {tabs}
      </Tabs>
      <Tabs size="large">
        {tabs}
      </Tabs>
    </div>,
  );
