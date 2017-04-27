import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Table, Tr } from '../src/';

const tableContent = [
  <thead key="head">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>,
  <tbody key="body">
    <tr>
      <th scope="row">1</th>
      <td>Lars Ivar</td>
      <td>Næss</td>
      <td>@lin</td>
    </tr>
    <Tr selected>
      <th scope="row">2</th>
      <td>Christer</td>
      <td>Kjellesvig</td>
      <td>@ckj</td>
    </Tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Mister boss man</td>
      <td>@ea</td>
    </tr>
  </tbody>,
];

storiesOf('Table', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add(
    'Default', () => (
      <Table>
        {tableContent}
      </Table>
    ),
  )
  .add(
    'Striped', () => (
      <Table striped>
        {tableContent}
      </Table>
    ),
  )
  .add(
    'Bordered', () => (
      <Table bordered>
        {tableContent}
      </Table>
    ),
  )
  .add(
    'Narrow', () => (
      <Table narrow>
        {tableContent}
      </Table>
    ),
  )
  .add(
    'Combined', () => (
      <Table striped bordered narrow>
        {tableContent}
      </Table>
    ),
  );
