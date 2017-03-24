import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Content, Notification, Tile, Title, Subtitle } from '../src/';

storiesOf('Tiles', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Tiles', () =>
    <Tile ancestor>
      <Tile vertical size="8">
        <Tile>
          <Tile parent vertical>
            <Tile child>
              <Notification color="primary">
                <Title>Vertical...</Title>
                <Subtitle>Top tile</Subtitle>
              </Notification>
            </Tile>
            <Tile child>
              <Notification color="warning">
                <Title>...tiles</Title>
                <Subtitle>Bottom tile</Subtitle>
              </Notification>
            </Tile>
          </Tile>
          <Tile parent>
            <Tile child>
              <Notification color="info">
                <Title>Middle tile</Title>
              </Notification>
            </Tile>
          </Tile>
        </Tile>
        <Tile parent>
          <Tile child>
            <Notification color="danger">
              <Title>Wide tile</Title>
              <Subtitle>Aligned with the right tile</Subtitle>
            </Notification>
          </Tile>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child>
          <Notification color="success">
            <Title>Tall tile</Title>
            <Subtitle>With even more content</Subtitle>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam semper diam at erat pulvinar,at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
              Morbi maximus, leo sit amet vehicula eleifend,
              nunc dui porta orci, quis semper odio felis ut quam.

              Suspendisse varius ligula in molestie lacinia.
              Maecenas varius eget ligula a sagittis.
              Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem,
              et sollicitudin felis neque sit amet erat.
              Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
              Aenean vitae gravida diam, finibus dignissim turpis.
              Sed eget varius ligula, at volutpat tortor.

              Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat,
              vitae congue lectus dolor consequat libero.
              Donec leo ligula, maximus et pellentesque sed, gravida a metus.
              Cras ullamcorper a nunc ac porta.
              Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
            </Content>
          </Notification>
        </Tile>
      </Tile>
    </Tile>,
  );
