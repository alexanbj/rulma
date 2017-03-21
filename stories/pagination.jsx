import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Block, Container, Pagination } from '../src/';

const prev = <Pagination.Prev><a>Previous</a></Pagination.Prev>;
const next = <Pagination.Next><a>Next page</a></Pagination.Next>;

const pages = [
  <Pagination.Item key="1">
    <a>1</a>
  </Pagination.Item>,
  <Pagination.Item ellipsis key="e1" />,
  <Pagination.Item key="45">
    <a>45</a>
  </Pagination.Item>,
  <Pagination.Item active key="46">
    <a>46</a>
  </Pagination.Item>,
  <Pagination.Item key="47">
    <a>47</a>
  </Pagination.Item>,
  <Pagination.Item ellipsis key="e2" />,
  <Pagination.Item key="84">
    <a>84</a>
  </Pagination.Item>,
];

storiesOf('Pagination', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Pagination', () =>
    <Pagination prev={prev} next={next}>
      {pages}
    </Pagination>,
  )
  .add('Disabled', () =>
    <Pagination prev={prev} next={next}>
      <Pagination.Item active>
        <a>1</a>
      </Pagination.Item>
      <Pagination.Item>
        <a>2</a>
      </Pagination.Item>
      <Pagination.Item disabled>
        <a>3</a>
      </Pagination.Item>
    </Pagination>,
  )
  .add('Centered', () =>
    <Pagination centered prev={prev} next={next}>
      {pages}
    </Pagination>,
  )
  .add('Right', () =>
    <Pagination right prev={prev} next={next}>
      {pages}
    </Pagination>,
  )
  .add('Sizes', () =>
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
    </div>,
  );
