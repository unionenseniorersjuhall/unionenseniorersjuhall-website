import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './';
import greenBox from '../../assets/images/green-box.png';

storiesOf('Image', module)
  .add('default', () => (
    <Image src={greenBox} alt="Description of image" />
  ))
  .add('404', () => (
    <Image src={''} alt="Description of image" />
  ));
