import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Icon } from '../src/';

storiesOf('Icon', module)
  .addDecorator(story => (
    <Container textCentered>
      {story()}
    </Container>
  ))
  .add('Sizes', () =>
    <ul>
      <li>
        small <Icon size="small" icon="github" />
      </li>
      <li>
        default <Icon icon="github" />
      </li>
      <li>
        medium <Icon size="medium" icon="github" />
      </li>
      <li>
        large <Icon size="large" icon="github" />
      </li>
    </ul>,
  );
