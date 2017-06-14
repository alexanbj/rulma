import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, ImageContainer, Table } from '../src/';

storiesOf('ImageContainer', module)
  .addDecorator(story =>
    <Container>
      {story()}
    </Container>,
  )
  .add('Fixed square images', () =>
    <Table bordered>
      <tbody>
        <tr>
          <td>16x16</td>
          <td>
            <ImageContainer dimension="16x16">
              <img src="http://bulma.io/images/placeholders/16x16.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>24x24</td>
          <td>
            <ImageContainer dimension="24x24">
              <img src="http://bulma.io/images/placeholders/24x24.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>32x32</td>
          <td>
            <ImageContainer dimension="32x32">
              <img src="http://bulma.io/images/placeholders/32x32.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>48x48</td>
          <td>
            <ImageContainer dimension="48x48">
              <img src="http://bulma.io/images/placeholders/48x48.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>64x64</td>
          <td>
            <ImageContainer dimension="64x64">
              <img src="http://bulma.io/images/placeholders/64x64.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>96x96</td>
          <td>
            <ImageContainer dimension="96x96">
              <img src="http://bulma.io/images/placeholders/96x96.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>128x128</td>
          <td>
            <ImageContainer dimension="128x128">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
      </tbody>
    </Table>,
  )
  .add('Responsive images with ratios', () =>
    <Table bordered>
      <tbody>
        <tr>
          <td>square</td>
          <td>
            <ImageContainer ratio="square">
              <img src="http://bulma.io/images/placeholders/480x480.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>1by1</td>
          <td>
            <ImageContainer ratio="1by1">
              <img src="http://bulma.io/images/placeholders/480x480.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>4by3</td>
          <td>
            <ImageContainer ratio="4by3">
              <img src="http://bulma.io/images/placeholders/640x480.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>3by2</td>
          <td>
            <ImageContainer ratio="3by2">
              <img src="http://bulma.io/images/placeholders/480x320.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>16by9</td>
          <td>
            <ImageContainer ratio="16by9">
              <img src="http://bulma.io/images/placeholders/640x360.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
        <tr>
          <td>2by1</td>
          <td>
            <ImageContainer ratio="2by1">
              <img src="http://bulma.io/images/placeholders/640x320.png" alt="placeholder" />
            </ImageContainer>
          </td>
        </tr>
      </tbody>
    </Table>,
  );
