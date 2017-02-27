import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Pagination } from '../src/';

const prev = <Pagination.Prev><a>Previous</a></Pagination.Prev>;
const next = <Pagination.Next disabled><a>Next</a></Pagination.Next>;

storiesOf('Pagination', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Pagination', () =>
    <Pagination prev={prev} next={next}>
      <Pagination.Item>
        <a>1</a>
      </Pagination.Item>
      <Pagination.Item ellipsis />
      <Pagination.Item>
        <a>45</a>
      </Pagination.Item>
      <Pagination.Item active>
        <a>46</a>
      </Pagination.Item>
      <Pagination.Item>
        <a>47</a>
      </Pagination.Item>
      <Pagination.Item ellipsis />
      <Pagination.Item>
        <a>84</a>
      </Pagination.Item>
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
      <Pagination.Item>
        <a>1</a>
      </Pagination.Item>
      <Pagination.Item ellipsis />
      <Pagination.Item>
        <a>45</a>
      </Pagination.Item>
      <Pagination.Item active>
        <a>46</a>
      </Pagination.Item>
      <Pagination.Item>
        <a>47</a>
      </Pagination.Item>
      <Pagination.Item ellipsis />
      <Pagination.Item>
        <a>84</a>
      </Pagination.Item>
    </Pagination>,
  )
  .add('Right', () =>
    <Pagination right prev={prev} next={next}>
      <Pagination.Item>
        <a>1</a>
      </Pagination.Item>
      <Pagination.Item ellipsis />
      <Pagination.Item>
        <a>45</a>
      </Pagination.Item>
      <Pagination.Item active>
        <a>46</a>
      </Pagination.Item>
      <Pagination.Item>
        <a>47</a>
      </Pagination.Item>
      <Pagination.Item ellipsis />
      <Pagination.Item>
        <a>84</a>
      </Pagination.Item>
    </Pagination>,
  );
