import React from 'react';
import { storiesOf } from '@storybook/react';
import H3 from './';

storiesOf('H3', module)
  .add('default', () => (
    <H3>Lorem ipsum dolor sit amet</H3>
  ))
  .add('Longer title', () => (
    <H3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</H3>
  ));
