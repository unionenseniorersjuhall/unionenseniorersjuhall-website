import React from 'react';
import { storiesOf } from '@storybook/react';
import H2 from './';

storiesOf('H2', module)
  .add('default', () => (
    <H2>Lorem ipsum dolor sit amet</H2>
  ))
  .add('Longer title', () => (
    <H2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</H2>
  ));
