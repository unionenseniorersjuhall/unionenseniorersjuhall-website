import React from 'react';
import { storiesOf } from '@storybook/react';
import H1 from './';

storiesOf('H1', module)
  .add('default', () => (
    <H1>Lorem ipsum dolor sit amet</H1>
  ))
  .add('Longer title', () => (
    <H1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</H1>
  ));
