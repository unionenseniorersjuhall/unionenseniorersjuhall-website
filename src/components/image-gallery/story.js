import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageGallery from './';
import greenBox from '../../assets/images/green-box.png';

const image = {
  src: greenBox,
  alt: 'Description of image',
};

storiesOf('ImageGallery', module)
  .add('6 images', () => (
    <ImageGallery images={[image, image, image, image, image, image]} />
  ))
  .add('1 image', () => (
    <ImageGallery images={[image]} />
  ));
