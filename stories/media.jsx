import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Button, Container, Delete, Form, Level, ImageContainer, Media } from '../src/';

storiesOf('Media', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('Media', () =>
    <Media>
      <Media.Left>
        <ImageContainer dimension="64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
        </ImageContainer>
      </Media.Left>
      <Media.Content>
        <p>
          <strong>John Smith</strong>
          <small>@johnsmith</small>
          <small>31m</small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
          pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
          facilisis.
        </p>
        <Level>
          <Level.Left>
            <Level.Item>
              <a>reply</a>
            </Level.Item>
            <Level.Item>
              <a>retweet</a>
            </Level.Item>
            <Level.Item>
              <a>favourite</a>
            </Level.Item>
          </Level.Left>
        </Level>
      </Media.Content>
      <Media.Right>
        <Delete />
      </Media.Right>
    </Media>,
  )
  .add('Form', () =>
    <Media>
      <Media.Left>
        <ImageContainer dimension="64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
        </ImageContainer>
      </Media.Left>
      <Media.Content>
        <Form.Textarea placeholder="Add comment" />
        <Level>
          <Level.Left>
            <Level.Item>
              <Button color="info">Post comment</Button>
            </Level.Item>
          </Level.Left>
          <Level.Right>
            <Form.Checkbox>Press enter to submit</Form.Checkbox>
          </Level.Right>
        </Level>
      </Media.Content>
    </Media>,
  )
  .add('Nesting', () =>
    <div>
      <Media>
        <Media.Left>
          <ImageContainer dimension="64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
          </ImageContainer>
        </Media.Left>
        <Media.Content>
          <strong>Barbara Middleton</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec
            ultricies elit blandit non.
            Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          </p>
          <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
          <Media>
            <Media.Left>
              <ImageContainer dimension="48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="placeholder" />
              </ImageContainer>
            </Media.Left>
            <Media.Content>
              <strong>Sean Brown</strong>
              <p>
                Donec sollicitudin urna eget eros malesuada sagittis.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas.
                Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
              </p>
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              <Media>
                <Media.Content>
                  Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus
                  ullamcorper sit amet nec massa.
                </Media.Content>
              </Media>
              <Media>
                <Media.Content>
                  Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada
                  metus sed pharetra euismod.
                  Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                </Media.Content>
              </Media>
            </Media.Content>
          </Media>
          <Media>
            <Media.Left>
              <ImageContainer dimension="48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="placeholder" />
              </ImageContainer>
            </Media.Left>
            <Media.Content>
              <strong>Kayli Eunice </strong>
              <p>
                Sed convallis scelerisque mauris, non pulvinar nunc mattis vel.
                Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Phasellus lacinia non nisl id feugiat.
              </p>
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </Media.Content>
          </Media>
        </Media.Content>
      </Media>
      <Media>
        <Media.Left>
          <ImageContainer dimension="64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
          </ImageContainer>
        </Media.Left>
        <Media.Content>
          <Form.Textarea placeholder="Add comment" />
          <Button color="primary">Post comment</Button>
        </Media.Content>
      </Media>
    </div>,
  );
