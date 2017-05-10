import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Block, Container, Pagination } from '../src/';

const prev = <Pagination.Prev>Previous</Pagination.Prev>;
const next = <Pagination.Next>Next page</Pagination.Next>;

const pages = [
  <Pagination.Item key="1">
    1
  </Pagination.Item>,
  <Pagination.Item ellipsis key="e1" />,
  <Pagination.Item key="45">
    45
  </Pagination.Item>,
  <Pagination.Item active key="46">
    46
  </Pagination.Item>,
  <Pagination.Item key="47">
    47
  </Pagination.Item>,
  <Pagination.Item ellipsis key="e2" />,
  <Pagination.Item key="84">
    84
  </Pagination.Item>,
];

storiesOf('Pagination', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Pagination', () => (
    <Pagination prev={prev} next={next}>
      {pages}
    </Pagination>
  ))
  .add('Disabled', () => (
    <Pagination prev={prev} next={next}>
      <Pagination.Item active>
        1
      </Pagination.Item>
      <Pagination.Item>
        2
      </Pagination.Item>
      <Pagination.Item disabled>
        3
      </Pagination.Item>
    </Pagination>
  ))
  .add('Centered', () => (
    <Pagination centered prev={prev} next={next}>
      {pages}
    </Pagination>
  ))
  .add('Right', () => (
    <Pagination right prev={prev} next={next}>
      {pages}
    </Pagination>
  ))
  .add('Sizes', () => (
    <div>
      <Block>
        <Pagination right prev={prev} next={next} size="small">
          {pages}
        </Pagination>
      </Block>
      <Block>
        <Pagination right prev={prev} next={next}>
          {pages}
        </Pagination>
      </Block>
      <Block>
        <Pagination right prev={prev} next={next} size="medium">
          {pages}
        </Pagination>
      </Block>
      <Block>
        <Pagination right prev={prev} next={next} size="large">
          {pages}
        </Pagination>
      </Block>
    </div>
  ));
